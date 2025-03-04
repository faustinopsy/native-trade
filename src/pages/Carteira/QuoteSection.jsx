import React from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function QuoteSection({ selectedCrypto, setSelectedCrypto, fetchQuote, quote }) {
  return (
    <View style={styles.section}>
      <Text>Selecione a criptomoeda:</Text>
      <Picker
        selectedValue={selectedCrypto}
        onValueChange={(itemValue) => setSelectedCrypto(itemValue)}
        style={{ height: 50, width: 150 }}
      >
        <Picker.Item label="BTC" value="BTC" />
        <Picker.Item label="LTC" value="LTC" />
        <Picker.Item label="ETH" value="ETH" />
        <Picker.Item label="SOL" value="SOL" />
      </Picker>
      <Button title="Obter Preço" onPress={fetchQuote} />
      {quote && (
        <View style={{ marginTop: 10 }}>
          <Text>Preço: {quote.preco}</Text>
        </View>
      )}
    </View>
  );
}
