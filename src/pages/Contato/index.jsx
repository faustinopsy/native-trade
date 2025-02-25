import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text>Aqui é o Contato</Text>
      <StatusBar style="auto" />
    </View>
  );
}


