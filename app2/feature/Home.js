import React from "react";
import { Text, SafeAreaView } from "react-native";
import Typography from "../design-system/Typography";

export default function Home({ navigation }) {
  return(
    <SafeAreaView>
      <Text style={[Typography.title1]}>Home</Text>
    </SafeAreaView>
  );
}