import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text>Aqui é a Sobre</Text>
      <StatusBar style="auto" />
    </View>
  );
}


