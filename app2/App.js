import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Color from './design-system/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>working app</Text>
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
