import React from "react";
import { Text, View } from "react-native";
import Typography from "../design-system/Typography";

export default function Home({ navigation }) {
  return(
    <View>
      <Text style={[Typography.title1]}>Home</Text>
    </View>
  );
}