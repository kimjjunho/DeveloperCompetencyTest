import React from "react";
import { Text, SafeAreaView, StatusBar, TextInput, StyleSheet, Pressable, View } from "react-native";
import Typography from "../../design-system/Typography";
import Color from "../../design-system/Colors";
import GButton from "../../design-system/component/Button";

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
  return(
    <SafeAreaView style={{backgroundColor: Color.white, flex: 1}}>
      <StatusBar backgroundColor={Color.white}/>
      <Text style={[Typography.title1]}>Signin</Text>
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
