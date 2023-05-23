import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from "react-native";
import Home from '../feature/Home';
import Record from '../feature/Record';
import Mypage from '../feature/Mypage';
import Color from "../design-system/Colors";

const Tab = createBottomTabNavigator();

const home = '홈';
const record = '기록';
const mypage = '마이페이지';

export default function Main() {
  return(
    <Tab.Navigator 
      initialRouteName = {home}
      screenOptions={
        {
          headerShown : false,
          tabBarActiveTintColor : Color.green400,
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Regular'
          }
        }
      }
    >
      <Tab.Screen 
        name={home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            !focused ? (
              <Image 
                source={require('../assets/icon/home_off.png')}
                style={{width:24, height: 24}}
              />
            ) : (
              <Image 
                source={require('../assets/icon/home_on.png')}
                style={{width:24, height: 24}}
              />
            )
          ),
        }}/>
      <Tab.Screen
        name={record}
        component={Record}
        options={{
          tabBarIcon: ({focused}) => (
            !focused ? (
              <Image 
                source={require('../assets/icon/record_off.png')}
                style={{width:24, height: 24}}
              />
            ) : (
              <Image 
                source={require('../assets/icon/record_on.png')}
                style={{width:24, height: 24}}
              />
            )
          ),
        }}/>
      <Tab.Screen
        name={mypage}
        component={Mypage}
        options={{
          tabBarIcon: ({focused}) => (
            !focused ? (
              <Image 
                source={require('../assets/icon/mypage_off.png')}
                style={{width:24, height: 24}}
              />
            ) : (
              <Image 
                source={require('../assets/icon/mypage_on.png')}
                style={{width:24, height: 24}}
              />
            )
          ),
        }}/>
     </Tab.Navigator>
  );
};