import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import Color from './design-system/Colors';
import Navigation from './navigator/Navigation';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Bold' : require('./assets/font/NotoSans-Bold.ttf'),
    'Regular' : require('./assets/font/NotoSans-Regular.ttf'),
  })
  if (!fontsLoaded) {
    return null
  }

  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.green800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
