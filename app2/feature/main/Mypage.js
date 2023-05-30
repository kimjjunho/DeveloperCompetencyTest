import React from "react";
import { View, Text, Pressable, Alert, Image } from "react-native";
import GHeader from "../../design-system/component/Header";
import Color from "../../design-system/Colors";
import Typography from "../../design-system/Typography";

function MypageItem({title, content}) {
  return(
    <View style={{marginHorizontal: 16, marginTop: 20}}>
      <Text style={[Typography.body6]}>{title}</Text>
      <View style={{
        marginTop: 8,
        backgroundColor: Color.gray100,
        borderRadius: 8,
        borderColor: Color.gray200,
        borderWidth: 1,
        justifyContent: 'center',
        }}>
        <Text style={[Typography.body4, {marginStart: 16, paddingVertical: 9}]}>{content}</Text>
      </View>
    </View>
  );
};

export default function Mypage() {
  return(
    <View style={{backgroundColor: Color.white, flex: 1 }}>
      <GHeader title={"마이페이지"}/>
      <Pressable
        onPress={()=>Alert.alert('이미지')}
        style={{alignItems: 'center', marginVertical: 25}}>
        <Image 
          source={require('../assets/icon/profile_base.png')}
          style ={{borderRadius: 50, height: 60, width: 60}}
        />
      </Pressable>
      <MypageItem title={'이름'} content={'김준호'}/>
      <MypageItem title={'생년월일'} content={'2005.10.07'}/>
      <MypageItem title={'학년 반 번호'} content={'3학년 2반 5번'}/>
      <MypageItem title={'아이디'} content={'jjun107'}/>
    </View>
  );
};