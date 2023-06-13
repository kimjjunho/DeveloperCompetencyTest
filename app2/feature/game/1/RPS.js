import React, {useEffect, useRef, useState} from "react";
import { View, Text, Pressable, Animated, StyleSheet } from "react-native";
import GHeader from "../../../design-system/component/Header";
import Color from "../../../design-system/Colors";
import RPSItem from "./RPSItem";
import Typography from "../../../design-system/Typography";
import { State } from "react-native-gesture-handler";
import { render } from "react-dom";
import GProgressBar from "../../../design-system/component/ProgressBar";

export default function RPS() {
  const [progress, setProgress] = useState(1);
  
  return (
    <View>
      <GHeader title={"가위바위보"}/>

      <View style={{height: 10}}/>

      <GProgressBar totalStep={5} nowStep={progress}/>

      <View style={{height: 72}}/>

      <View style={{alignItems: 'center'}}>
        <Text style={[Typography.title2]}>상대</Text>
        <RPSItem what={"주먹"}/>
      </View>

      <View style={{height: 130}}/>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Pressable onPress={() => {
          setProgress(progress + 1)
        }}>
          <RPSItem what={"주먹"}/>
        </Pressable>

        <View style={{width: 30}}/>

        <Pressable onPress={() => {
          setProgress(progress + 1)
        }}>
          <RPSItem what={"가위"}/>
        </Pressable>

        <View style={{width: 30}}/>

        <Pressable onPress={() => {
          setProgress(progress + 1)
        }}>
          <RPSItem what={"보"}/>
        </Pressable>
      </View>
    </View>
  );


  
};


