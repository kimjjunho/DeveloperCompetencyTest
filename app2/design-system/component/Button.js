import { TouchableOpacity } from "react-native-gesture-handler";
import { View, StyleSheet, Text } from "react-native";
import Color from "../Colors";
import Typography from "../Typography";

TouchableOpacity.defaultProps = {activeOpacity: 0.8}

const styles = StyleSheet.create({
  g_btn: {
    backgroundColor: Color.green700,
    paddingVertical: 13,
    borderRadius: 12,
  },
  g_text: {
    color: Color.white,
    alignSelf: 'center',
  }
});

function GButton({text, onPress}) {
  return (
    <View style={{marginHorizontal: 16}}>
      <TouchableOpacity onPress={onPress} style={styles.g_btn}>
        <Text style={[Typography.body4, styles.g_text]}>{text}</Text>
     </TouchableOpacity>
    </View> 
  );
};

export default GButton;