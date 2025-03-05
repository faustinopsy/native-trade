import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Alert } from 'react-native';
import defaultStyles from './styles';

export default function Form({ formConfig }) {
  const { formStyle, inputs, button } = formConfig;

  const initialState = inputs.reduce((acc, input) => {
    acc[input.key] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const enviarForm = () => {
    for (let key in formData) {
      if (formData[key].trim() === '') {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        window.alert('Por favor, preencha todos os campos.');
        return;
      }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      window.alert('Por favor, insira um email válido.');
      return;
    }
    console.log('Dados do formulário:', formData);
    Alert.alert('Dados do formulário:', formData);
    window.alert(formData.nome);
  };

  return (
    <View style={[defaultStyles.formContainer, formStyle]}>
      {inputs.map((input) => (
        <TextInput
          key={input.key}
          placeholder={input.placeholder}
          style={[defaultStyles.input, input.style]}
          value={formData[input.key]}
          onChangeText={text =>
            setFormData(prevState => ({
              ...prevState,
              [input.key]: text,
            }))
          }
          multiline={input.multiline || false}
        />
      ))}
      <TouchableOpacity onPress={enviarForm} style={[defaultStyles.button, button.style]}>
        <Text style={defaultStyles.buttonText}>{button.title}</Text>
      </TouchableOpacity>
    </View>
  );
}


