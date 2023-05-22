import React from "react";
import { Button, Text, SafeAreaView, StatusBar } from "react-native";
import Typography from "../design-system/Typography";
import Color from "../design-system/Colors";

export default function Signin({ navigation }) {
  return(
    <SafeAreaView>
      <StatusBar backgroundColor={Color.white}/>
      <Text style={[Typography.title1]}>Signin</Text>
      <Button title={'Go Home'} onPress={() => navigation.replace('Main')}/>
    </SafeAreaView>
  );
}