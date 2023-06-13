import React, {useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Color from "../Colors";

function GProgressBar({ totalStep, nowStep }) {
  const loaderValue = useRef(new Animated.Value(0)).current;

  const load = (count) => {
    Animated.timing(loaderValue, {
      toValue: (count / totalStep) * 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  });

  useEffect(() => {
    load(nowStep)
  }, [nowStep]);

  return (
    <View style={styles.progress_background}>
       <Animated.View style={[styles.progress_bar, {width: width}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  progress_background: {
    width: '100%',
    height: 10,
    backgroundColor: Color.gray200,
  },
  progress_bar: {
    height: 10,
    backgroundColor: Color.green500,
  }
});

export default GProgressBar;