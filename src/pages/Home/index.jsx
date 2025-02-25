import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.section}>
        <Card
          icon="school"
          title="Simulador Financeiro Educativo"
          text="Plataforma educativa que replica o mercado real usando dados fictícios, permitindo que você simule operações sem dinheiro real"
          titleStyle={styles.sectionTitle}
          textStyle={styles.sectionText}
          iconColor="#3498db"
        />
      </View>
    </ScrollView>
  );
}