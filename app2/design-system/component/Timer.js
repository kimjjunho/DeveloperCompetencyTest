import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Typography from '../Typography';
import Color from '../Colors';

function GTimer({ second, setSecond, todo }) {

  useEffect(() => {
    const countDown = setInterval(() => {
      if (second > 0) {
        setSecond();
      } else {
        todo();
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [second]);

  return(
    <View>
      <Text style={[Typography.body4, {color: Color.green500}]}>{second}s</Text>
    </View>
  )
}

export default GTimer;
