import React from "react";
import { Button, Text, SafeAreaView } from "react-native";
import Typography from "../design-system/Typography";

export default function Signin({ navigation }) {
  return(
    <SafeAreaView>
      <Text style={[Typography.title1]}>Signin</Text>
      <Button title={'Go Home'} onPress={() => navigation.replace('Home')}/>
    </SafeAreaView>
  );
}