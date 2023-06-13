import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Animated, StyleSheet } from "react-native";
import GHeader from "../../../design-system/component/Header";
import RPSItem from "./RPSItem";
import Typography from "../../../design-system/Typography";
import GProgressBar from "../../../design-system/component/ProgressBar";
import GTimer from "../../../design-system/component/Timer";

export default function RPS({navigation}) {
  const totalStep = 5;
  const [progress, setProgress] = useState(1);

  const firstSecond = 5;
  const [second, setSecond] = useState(firstSecond);

  const rpsList = ["주먹", "가위", "보"]
  const personList = ["나", "상대"]

  const [rps, setRps] = useState("")
  const [person, setPerson] = useState("")

  const randomGame = () => {
    setRps(rpsList[Math.floor(Math.random() * rpsList.length)]);
    setPerson(personList[Math.floor(Math.random() * personList.length)])
  }

  useEffect(() => { randomGame() },[rps, person])

  const goNextStep = () => {
    if (totalStep === progress) {
      navigation.pop();
    } else {
      randomGame()
      setProgress(progress + 1);
      setSecond(firstSecond);
    }
  };
  
  return (
    <View>
      <GHeader title={"가위바위보"}/>

      <View style={{height: 10}}/>

      <GProgressBar totalStep={totalStep} nowStep={progress}/>

      <GTimer 
        second={second}
        setSecond={() => setSecond(second - 1)}
        todo={() => goNextStep()}
        />

      <View style={{height: 72}}/>

      <View style={{alignItems: 'center'}}>
        <Text style={[Typography.title2]}>{person}</Text>
        <RPSItem what={rps}/>
      </View>

      <View style={{height: 130}}/>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Pressable onPress={() => goNextStep()}>
          <RPSItem what={"주먹"}/>
        </Pressable>

        <View style={{width: 30}}/>

        <Pressable onPress={() => goNextStep()}>
          <RPSItem what={"가위"}/>
        </Pressable>

        <View style={{width: 30}}/>

        <Pressable onPress={() => goNextStep()}>
          <RPSItem what={"보"}/>
        </Pressable>
      </View>
    </View>
  );
};
