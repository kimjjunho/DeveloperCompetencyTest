import React from "react";
import { Text, SafeAreaView, StatusBar, TextInput, StyleSheet, Pressable, View, Dimensions, Image } from "react-native";
import Typography from "../../design-system/Typography";
import Color from "../../design-system/Colors";
import GButton from "../../design-system/component/Button";
import Swiper from "react-native-web-swiper";

const styles = StyleSheet.create({
  input_container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Color.gray300,
    backgroundColor: Color.gray100,
    paddingHorizontal: 16,
    paddingVertical: 11,
    marginHorizontal: 16,
    fontFamily: 'Regular',
    fontSize: 14,
    color: Color.gray900,
  },
  g_btn: {
    backgroundColor: Color.green700
  },
});

export default function Signin({ navigation }) {
  const appWidth = Dimensions.get('window').width;
  const images = [
    require('../sign/1.png'),
    require('../sign/2.png'),
    require('../sign/3.png'),
    require('../sign/4.png'),
    require('../sign/5.png'),
    require('../sign/6.png'),
  ];
  return(
    <SafeAreaView style={{backgroundColor: Color.white, flex: 1}}>
      <StatusBar backgroundColor={Color.white}/>
      <View style={{backgroundColor: Color.green400, height: appWidth}}>
        <Swiper
          loop
          timeout={5}
          controlsEnabled={false}>
          {images.map((item)=> {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center',flex:1}}>
               <Image source={item} style={{width: 200, height: 200}}/>
              </View>
            )}
          )}
        </Swiper>
      </View>
      <View style={{height: 26}}/>
      <TextInput style={styles.input_container} placeholder="아이디"/>
      <View style={{height: 16}}/>
      <TextInput style={styles.input_container} placeholder="비밀번호"/>
      <View style={{height: 30}}/>
      <GButton text='로그인' onPress={() =>navigation.replace('Main')}/>
      <View style={{height: 20}}/>
      <Pressable
        style={{marginHorizontal: 140}}
        onPress={()=>navigation.replace('Main')}>
        <Text style={[Typography.detail2,{color: Color.green600,textAlign: 'center'}]}>회원가입</Text>
      </Pressable>
      <View style={{height: 20}}/>
      <Pressable
        style={{marginHorizontal: 140}}
        onPress={()=>navigation.replace('Main')}>
        <Text style={[Typography.detail2,{textAlign: 'center'}]}>게스트로 로그인</Text>
      </Pressable>
    </SafeAreaView>
  );
}