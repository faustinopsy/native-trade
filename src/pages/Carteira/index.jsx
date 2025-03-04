import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import styles from './styles';

export default function Carteira() {
  const [moneyData, setMoneyData] = useState(null);
  const [carteira, setCarteira] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        let storedToken = await AsyncStorage.getItem('@myapp:token');

        if (!storedToken) {
          const respMoney = await api.post('/money'); 
          if (respMoney.data?.token) {
            storedToken = respMoney.data.token;
            await AsyncStorage.setItem('@myapp:token', storedToken);
          }
          setMoneyData(respMoney.data);
        } else {
          const respMoney = await api.post('/money', { token: storedToken });
          setMoneyData(respMoney.data);
          if (respMoney.data?.token) {
            storedToken = respMoney.data.token;
            await AsyncStorage.setItem('@myapp:token', storedToken);
          }
        }

        if (storedToken) {
          const respCarteira = await api.get(`/carteira/${storedToken}`);
          setCarteira(respCarteira.data);
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Erro: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>Token: {moneyData?.token}</Text>
        <Text>Money: {moneyData?.money}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Carteira:</Text>
        <FlatList
          data={carteira}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 4 }}>
              <Text>ID: {item.id}</Text>
              <Text>Cripto: {item.crypto}</Text>
              <Text>Preço: {item.preco}</Text>
              <Text>Quantidade: {item.amount}</Text>
              <Text>Tipo: {item.type}</Text>
              <Text>Money: {item.money}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.section}>
        <Text>CRIPTO: </Text>
        <Button style={styles.title} title="Comprar" onPress={() => Alert.alert("compra")} />
        <Button style={styles.title} title="Vender" onPress={() => Alert.alert("vende")} />
      </View>

      
    </View>
  );
}
