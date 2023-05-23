import React from "react";
import { Text, View, FlatList, Pressable, Alert } from "react-native";
import Typography from "../design-system/Typography";
import GHeader from "../design-system/component/Header";
import Color from "../design-system/Colors";

const HomeData = [
  {
    title: '가위바위보',
    color: Color.yellow,
    count: 5,
    moveTo: '1',
  },
  {
    title: '숫자 누르기',
    color: Color.yellow,
    count: 5,
    moveTo: '2',
  },
  {
    title: '도형 회전하기',
    color: Color.green500,
    count: 5,
    moveTo: '3',
  },
  {
    title: '약속 정하기',
    color: Color.green500,
    count: 5,
    moveTo: '4',
  },
  {
    title: '길 만들기',
    color: Color.blue400,
    count: 5,
    moveTo: '5',
  },
  {
    title: '도형 순서 기억하기',
    color: Color.blue400,
    count: 5,
    moveTo: '6',
  },
  {
    title: '고양이 술래잡기',
    color: Color.red,
    count: 5,
    moveTo: '7',
  },
  {
    title: '마법약 만들기',
    color: Color.red,
    count: 5,
    moveTo: '8',
  },
];

export default function Home({navigation}) {
  return(
    <View style={{backgroundColor: Color.white, marginBottom: 60}}>
      <GHeader title={"홈"}/>
      <FlatList
        data={HomeData}
        renderItem={({item}) => { 
          return <View style={
              {
                height: 130,
                marginHorizontal: 16,
                marginVertical: 7,
                borderRadius: 5,
                backgroundColor: Color.white,
                elevation: 3,
                flexDirection: "row",
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
              <View style={{marginStart: 30}}>
                <Text style={[Typography.body3]}>{item.title}</Text>
                <View style={{marginTop: 9, flexDirection: "row", alignItems: 'center'}}>
                  <Pressable
                    onPress={()=>navigation.navigate(item.moveTo)}>
                    <Text style={[Typography.detail2, {color: Color.green400}]}>게임 </Text>
                  </Pressable>
                  <Text style={[Typography.detail2, {color: Color.gray600}]}>| {item.count}문제</Text>

                </View>
              </View>
              <View style={{backgroundColor: item.color, height: 64, width: 64, borderRadius: 50, marginEnd: 30}}/>
          </View>
        }
      }
      />
    </View>
  );
};
