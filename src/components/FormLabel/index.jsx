import React from 'react';
import { Text, StyleSheet } from 'react-native';

const FormLabel = ({ text, style }) => {
  return <Text style={[styles.label, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default FormLabel;
