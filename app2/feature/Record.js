import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Platform } from "react-native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PieChart from "react-native-pie-chart"
import Color from "../design-system/Colors";
import GHeader from "../design-system/component/Header";
import Typography from "../design-system/Typography";
import { Key, token } from "../assets/data/local";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScoreData =[
  {
    name: '가위바위보',
    date: '2022-03-13',
    total: 5,
    correct: 3,
  },
  {
    name: '도형 회전하기',
    date: '2022-03-13',
    total: 5,
    correct: 2,
  },
  {
    name: '길 만들기',
    date: '2023-05-23',
    total: 6,
    correct: 3,
  }
];


function ScoreList() {
  const [scoreData, setScoreData] = useState([])

  useEffect(() => {
    AsyncStorage.getItem(Key.TOKEN).then(token=>
      fetch('http://localhost:8080/game', {
        method : "GET",
        headers : {
          Authorization : token
        }
      })
      .then(res=>res.json())
      .then(res=>{ 
        setScoreData(res.result_list.reverse())
       })
    )

  }, [scoreData]);

  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
    <FlatList
      data={scoreData}
      renderItem={({item}) => {
        return <View style={
          {
            height: 60,
            marginHorizontal: 16,
            marginTop: 16,
            borderRadius: 5,
            backgroundColor: Color.white,
            elevation: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            shadowColor: Color.gray500,
            shadowOpacity: 1,
            shadowOffset: {
              height: 0,
              width: 0
            }
          }
        }>
          <View style={{marginStart: 16}}>
            <Text style={[Typography.body3]}>{item.name}</Text>
            <Text style={[Typography.detail2, {color: Color.gray600}]}>{item.date}</Text>
          </View>
          <Text style={[Typography.body3, {marginEnd: 16, color: item.correct/item.total >= 0.5 ? Color.blue400 : Color.red}]}>{item.total}/{item.correct}</Text>
        </View>
      }}
    />
  </View>
  );
};

const Graph = () => {
  const series = [123, 321, 123, 789, 537, 100, 100, 100];
  const sliceColor = [Color.green100, Color.green200, Color.green300, Color.green400, Color.green500, Color.green600, Color.green700, Color.green800]
  return Platform.OS === 'ios' ? <View style={{flex: 1, backgroundColor: Color.white, alignItems: 'center', justifyContent: 'center'}}>
    <PieChart
      widthAndHeight={250}
      series={series}
      sliceColor={sliceColor}
      coverFill={Color.white}
    />
  </View> :
   <View>
   </View>
};

const Tab = createMaterialTopTabNavigator();

export default function Record() {
  // const scoreData = async() => {
    
  // }
  
  return(
    <>
     <GHeader title={"기록"} color={Color.white}/>
     <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Color.green600,
        tabBarInactiveTintColor: Color.gray600,
        tabBarIndicatorStyle: {
          backgroundColor: Color.green600,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'Regular',
        }
      }}>
      <Tab.Screen name="리스트" component={ScoreList}/>
      <Tab.Screen name="그래프" component={Graph}/>
    </Tab.Navigator>
    </>
  );
};