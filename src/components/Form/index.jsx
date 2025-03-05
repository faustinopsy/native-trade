import React from 'react';
import { View, StyleSheet } from 'react-native';

const Form = ({ children, style }) => {
  return <View style={[styles.form, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  form: {
    padding: 10,
  },
});

export default Form;
