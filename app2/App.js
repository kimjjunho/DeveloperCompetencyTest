import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Typography from './design-system/Typography';
import { useFonts } from "expo-font";
import Color from './design-system/Colors';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Bold' : require('./assets/font/NotoSans-Bold.ttf'),
    'Regular' : require('./assets/font/NotoSans-Regular.ttf'),
  })
  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={[Typography.title1, { color:Color.blue300 }]}>working app</Text>
      <Text style={[Typography.title2]}>working app</Text>
      <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.green800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
