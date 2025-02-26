import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card({ data}) {
  return (
    <View style={data.containerStyle}>
      <Ionicons name={data.icon} size={32} color={data.iconColor || '#fff'} />
      <Text style={data.titleStyle}>{data.title}</Text>
      <Text style={data.textStyle}>{data.text}</Text>
    </View>
  );
}
