import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import styles from './styles';

export default function OrderSection({ orderAmount, setOrderAmount, handleOrder }) {
  return (
    <View style={styles.section}>
      <Button title="Comprar" onPress={() => handleOrder('buy')} />
      <TextInput 
        style={styles.input}
        onChangeText={setOrderAmount}
        value={orderAmount}
        placeholder="Quantidade"
        keyboardType="numeric"
      />
      <Button title="Vender" onPress={() => handleOrder('sell')} />
    </View>
  );
}
