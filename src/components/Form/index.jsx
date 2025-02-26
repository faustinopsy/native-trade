// Form.jsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import defaultStyles from './styles';

export default function Form({ formConfig }) {
  const { formStyle, inputs, button } = formConfig;

  const initialState = inputs.reduce((acc, input) => {
    acc[input.key] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const enviarForm = () => {
    console.log('Dados do formulário:', formData);
  };

  return (
    <View style={[defaultStyles.formContainer, formStyle]}>
      {inputs.map((input) => (
        <TextInput
          key={input.key}
          placeholder={input.placeholder}
          style={[defaultStyles.input, input.style]}
          value={formData[input.key]}
          multiline={input.multiline || false}
        />
      ))}
      <TouchableOpacity onPress={enviarForm} style={[defaultStyles.button, button.style]}>
        <Text style={defaultStyles.buttonText}>{button.title}</Text>
      </TouchableOpacity>
    </View>
  );
}


