import React from "react";
import { View } from "react-native";
import GHeader from "../design-system/component/Header";
import Color from "../design-system/Colors";

export default function Mypage() {
  return(
    <View style={{backgroundColor: Color.white}}>
      <GHeader title={"마이페이지"}/>
    </View>
  );
};