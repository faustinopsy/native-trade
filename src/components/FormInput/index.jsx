import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const FormInput = ({ value, onChangeText, placeholder, multiline, style }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline={multiline}
      onFocus={() => console.log("Input focado")}
      onBlur={() => console.log("Input desfocado")}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
});

export default FormInput;

