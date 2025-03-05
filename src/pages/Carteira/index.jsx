import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import styles from './styles';
import WalletInfo from './WalletInfo';
import WalletList from './WalletList';
import QuoteSection from './QuoteSection';
import OrderSection from './OrderSection';

export default function Carteira() {
  const [moneyData, setMoneyData] = useState(null);
  const [carteira, setCarteira] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [quote, setQuote] = useState(null);
  const [orderAmount, setOrderAmount] = useState('2');


  useEffect(() => {
    async function fetchJWT() {
      try {
        setLoading(true);
        setError(null);
        let storedToken = await AsyncStorage.getItem('@myapp:tokenjwt');
        if (!storedToken) {
          const respoJWT = await api.post('/auth/create');
          if (respoJWT.data?.jwt) {
            storedToken = respoJWT.data.jwt;
            await AsyncStorage.setItem('@myapp:tokenjwt', storedToken);
          }
          
        }else{
          const respoJWT = await api.post('/auth/refresh');
          if (respoJWT.data?.jwt) {
            storedToken = respoJWT.data.jwt;
            await AsyncStorage.setItem('@myapp:tokenjwt', storedToken);
          }
        }
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchJWT();
  }, []);

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

  async function fetchQuote() {
    try {
      setLoading(true);
      const cryptoLower = selectedCrypto.toLowerCase();
      const response = await api.get(`/quote/${cryptoLower}`);
      if (response.data.success) {
        setQuote(response.data);
      } else {
        Alert.alert('Erro', 'Não foi possível obter o quote.');
      }
    } catch (err) {
      Alert.alert('Erro', err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleOrder(type) {
    
    try {
      const token = moneyData?.token;
      if (!token) {
        Alert.alert('Erro', 'Token não encontrado.');
        window.alert('Erro: Token não encontrado.');
        return;
      }
      if (!quote) {
        Alert.alert('Erro', 'Nenhuma cotação disponível para a operação.');
        window.alert('Erro: Nenhuma cotação disponível para a operação.');
        return;
      }
      const payload = {
        token,
        crypto: selectedCrypto.toLowerCase(),
        preco: quote.preco.toString(),
        amount: orderAmount,
        type
      };
      const response = await api.post('/carteira', payload);

      if (response.data.status === 'success') {
        Alert.alert('Sucesso', response.data.message);
        const refreshedMoney = await api.post('/money', { token });
        setMoneyData(refreshedMoney.data);
        const refreshedCarteira = await api.get(`/carteira/${token}`);
        setCarteira(refreshedCarteira.data);
      } else if (response.data.status === 'error') {
        Alert.alert('Erro', response.data.message);
        window.alert(response.data.message);
      } else {
        Alert.alert('Erro', 'Resposta inesperada do servidor.');
      }
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  }

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
    <ScrollView style={styles.container}>
      <WalletInfo token={moneyData?.token} money={moneyData?.money} />
      <WalletList carteira={carteira} />
      <QuoteSection 
        selectedCrypto={selectedCrypto} 
        setSelectedCrypto={setSelectedCrypto} 
        fetchQuote={fetchQuote} 
        quote={quote} 
      />
      <OrderSection 
        orderAmount={orderAmount} 
        setOrderAmount={setOrderAmount} 
        handleOrder={handleOrder} 
      />
    </ScrollView>
  );
}
