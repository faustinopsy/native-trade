import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormLabel from '../FormLabel';
import FormInput from '../FormInput';

const FormField = ({ label, value, onChangeText, placeholder, multiline, labelStyle, inputStyle }) => {
  return (
    <View style={styles.fieldContainer}>
      <FormLabel text={label} style={labelStyle} />
      <FormInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        style={inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 15,
  },
});

export default FormField;
