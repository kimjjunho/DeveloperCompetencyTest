import React from 'react';
import { View, Text, Image } from "react-native";
import Typography from '../../../design-system/Typography';

export default function RPSItem({ what }) {
  var image = require('../../../assets/icon/rock.png')

  if (what === "가위") {
    image = require('../../../assets/icon/scissor.png')
  } else if (what === "보") {
    image = require('../../../assets/icon/paper.png')
  }

  return(
    <View style={{alignItems: 'center'}}>
      <Image source={image} style={{width: 82, height: 82}}/>
      <View style={{height: 5}}/>
      <Text style={[Typography.body3]}>{what}</Text>
    </View>
  );
};