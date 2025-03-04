import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

export default function WalletList({ carteira }) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Carteira:</Text>
      <FlatList
        data={carteira}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 4 }}>
            <Text>Cripto: {item.crypto} || Preço: {item.preco} || Quantidade: {item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
}
