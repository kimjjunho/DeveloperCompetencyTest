import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Alert, Image } from "react-native";
import GHeader from "../design-system/component/Header";
import Color from "../design-system/Colors";
import Typography from "../design-system/Typography";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const [profileData, setProfileData] = useState([])

  useEffect(() => {
    AsyncStorage.getItem("token").then(token=>
      AsyncStorage.getItem("id").then(id=>
        fetch('http://localhost:8080/user/information/' + id, {
          method : "GET",
          headers : {
            Authorization : token
          }
        })
        .then(res=>res.json())
        .then(res=>{ setProfileData(res) })
      )
    )
  }, [profileData]);

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
      <MypageItem title={'이름'} content={profileData.name}/>
      <MypageItem title={'아이디'} content={profileData.user_id}/>
    </View>
  );
};