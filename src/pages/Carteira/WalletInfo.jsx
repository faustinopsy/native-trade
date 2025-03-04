import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function WalletInfo({ token, money }) {
  return (
    <View style={styles.section}>
      <Text>Token: {token} || Money: {money}</Text>
    </View>
  );
}
