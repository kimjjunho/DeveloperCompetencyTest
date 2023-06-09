import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Typography from '../Typography';

function GHeader({ title, color }) {
  return (
    <SafeAreaView style={{backgroundColor: color}}>
      <Text style={[Typography.title2, {marginLeft:26, paddingVertical: 11}]}>{title}</Text>
    </SafeAreaView>
  );
};

export default GHeader;