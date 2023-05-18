import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import Typography from "../design-system/Typography";
import GHeader from "../design-system/component/Header";

export default function Home({ navigation }) {
  return(
    <View>
      <GHeader title={"홈"}/>
      <Text style={[Typography.title1]}>Home</Text>
    </View>
  );
}
