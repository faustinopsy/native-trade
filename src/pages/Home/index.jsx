import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Aqui é a home</Text>
      <StatusBar style="auto" />
    </View>
  );
}


