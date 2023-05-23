import React from "react";
import { View } from "react-native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Color from "../design-system/Colors";
import GHeader from "../design-system/component/Header";

const ScoreList = () => (
  <View style={{flex: 1, backgroundColor: Color.green800}}></View>
);

const Graph = () => (
  <View style={{flex: 1, backgroundColor: Color.black}}></View>
);

const Tab = createMaterialTopTabNavigator();

export default function Record() {
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