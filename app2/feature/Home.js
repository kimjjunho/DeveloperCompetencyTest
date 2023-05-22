import React from "react";
import { Text, View, FlatList } from "react-native";
import Typography from "../design-system/Typography";
import GHeader from "../design-system/component/Header";
import Color from "../design-system/Colors";

const HomeData = [
  {
    title: '가위바위보'
  },
  {
    title: '도형 회전하기'
  },
  {
    title: '약속 정하기'
  },
  {
    title: '길 만들기'
  },
  {
    title: '마법약 만들기'
  },
  {
    title: '숫자 누르기'
  },
  {
    title: '도형 순서 기억하기'
  },
  {
    title: '고양이 술래잡기'
  },
  {
    title: '개수 비교하기'
  }
];

export default function Home() {
  
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
                elevation: 3
              }
            }>
            <Text style={Typography.body3}>{item.title}</Text>
          </View>
        }
      }
      />
    </View>
  );
};
