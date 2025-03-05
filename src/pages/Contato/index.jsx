import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Form from '../../components/Form';
import styles from './styles';
import DemoEffects from './../../components/DemoEffects';
export default function Contato() {
  const formConfig = {
    formStyle: { padding: 10 },
    inputs: [
      {
        key: 'nome',
        placeholder: 'Digite seu nome',
        style: { height: 40, borderWidth: 1, marginBottom: 10, padding: 5 },
      },
      {
        key: 'email',
        placeholder: 'Digite seu email',
        style: { height: 40, borderWidth: 1, marginBottom: 10, padding: 5 },
      },
      {
        key: 'mensagem',
        placeholder: 'Digite sua mensagem',
        style: { height: 100, borderWidth: 1, marginBottom: 10, padding: 5 },
        multiline: true,
      },
    ],
    button: {
      title: 'Enviar',
      style: { backgroundColor: '#3498db', padding: 10, alignItems: 'center' },
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Entre em Contato</Text>
        <Form formConfig={formConfig} />
        <DemoEffects />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}



