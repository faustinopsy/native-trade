import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Card({ icon, title, text, containerStyle, titleStyle, textStyle, iconColor }) {
  return (
    <View style={containerStyle}>
      <Ionicons name={icon} size={32} color={iconColor || '#fff'} />
      <Text style={titleStyle}>{title}</Text>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
}