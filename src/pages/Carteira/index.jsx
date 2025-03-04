import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import styles from './styles';

export default function Carteira() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let storedToken = await AsyncStorage.getItem('@myapp:token');

        let body = {};
        if (storedToken) {
          body = { token: storedToken };
        }

        const response = await api.post('/money', body);
        console.log('response.data:', response.data);

        if (response.data?.token) {
          await AsyncStorage.setItem('@myapp:token', response.data.token);
        }

        setData(response.data);

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
      <Text style={styles.title}>API</Text>
      <View>
        <Text>Token: {data?.token}</Text>
        <Text>Money: {data?.money}</Text>
      </View>
    </View>
  );
}
