import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import GHeader from "../../../design-system/component/Header";
import RPSItem from "./RPSItem";
import Typography from "../../../design-system/Typography";
import GProgressBar from "../../../design-system/component/ProgressBar";
import GTimer from "../../../design-system/component/Timer";
import { token } from "../../../assets/data/local";

export default function RPS({navigation}) {
  const [correct, setCorrect] = useState(1);
  const r = "주먹"
  const s = "가위"
  const p = "보"
  const me = "나"
  const other = "상대"

  const totalStep = 5;
  const [progress, setProgress] = useState(1);

  const firstSecond = 5;
  const [second, setSecond] = useState(firstSecond);

  const rpsList = [r, s, p]
  const personList = [me, other]

  const [rps, setRps] = useState("")
  const [person, setPerson] = useState("")

  const randomGame = () => {
    setRps(rpsList[Math.floor(Math.random() * rpsList.length)]);
    setPerson(personList[Math.floor(Math.random() * personList.length)])
  }

  const checkTest = (what) => {
    if (person === other) {
      if (rps === r) {
        if (what === p) {
          setCorrect(correct + 1);
        }
      }
      else if (rps === s) {
        if (what === r) {
          setCorrect(correct + 1);
        }
      }
      else if (rps === p) {
        if (what === s) {
          setCorrect(correct + 1);
        }
      }
    } else if (person === "나") {
      if (rps === r) {
        if (what === s) {
          setCorrect(correct + 1);
        }
      }
      else if (rps === s) {
        if (what === p) {
          setCorrect(correct + 1);
        }
      }
      else if (rps === p) {
        if (what === r) {
          setCorrect(correct + 1);
        }
      }
    }
    goNextStep()
  }

  useEffect(() => { randomGame() },[rps, person])

  const goNextStep = () => {
    if (totalStep === progress) {
       fetch('http://localhost:8080/game', {
        method: "POST",
        headers : {
          "Content-Type": "application/json",
          Authorization : token,
        },
        body : JSON.stringify({
          "name": "가위바위보",
          "total": 5,
          "correct": correct,
          "date" : "2023-06-14"
        })
      })
      .then(res=>res.json())
      .then(navigation.pop())
      
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
        <Pressable onPress={() => checkTest(r)}>
          <RPSItem what={r}/>
        </Pressable>

        <View style={{width: 30}}/>

        <Pressable onPress={() => checkTest(s)}>
          <RPSItem what={s}/>
        </Pressable>

        <View style={{width: 30}}/>

        <Pressable onPress={() => checkTest(p)}>
          <RPSItem what={p}/>
        </Pressable>
      </View>
    </View>
  );
};
