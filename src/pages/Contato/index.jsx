import React, { useState } from 'react';
import { ScrollView, View, Text,Alert } from 'react-native';
import styles from './styles';
import Form from './../../components/Form';
import FormField from './../../components/FormField';
import FormButton from './../../components/FormButton';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarForm = () => {
      if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        window.alert('Por favor, preencha todos os campos.');
        return;
      }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      window.alert('Por favor, insira um email válido.');
      return;
    }
    console.log(`Nome: ${nome} Email: ${email} Mensagem: ${mensagem}`);
    Alert.alert(`Nome: ${nome} Email: ${email} Mensagem: ${mensagem}`);
    window.alert(`Nome: ${nome} Email: ${email} Mensagem: ${mensagem}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} onScroll={(e) => console.log("Scroll Y:", e.nativeEvent.contentOffset.y)}>
      <View style={styles.container}>
        <Text style={styles.title}>Entre em Contato</Text>
        <Form>
          <FormField
            label="Nome"
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />
          <FormField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
          />
          <FormField
            label="Mensagem"
            value={mensagem}
            onChangeText={setMensagem}
            placeholder="Digite sua mensagem"
            multiline={true}
            labelStyle={{}}
            inputStyle={{ height: 100, borderWidth: 1, marginBottom: 10, padding: 5 }}
          />
          <FormButton title="Enviar" onPress={enviarForm} />
        </Form>
      </View>
    </ScrollView>
  );
}


