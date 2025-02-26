import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import Contador from '../../components/Contador';
export default function Home() {
  const cardData = {
    icon: "school",
    title: "Simulador Financeiro Educativo",
    text: "Plataforma educativa que replica o mercado real usando dados fictícios, permitindo que você simule operações sem dinheiro real",
    titleStyle: styles.sectionTitle,
    textStyle: styles.sectionText,
    iconColor: "#3498db"
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.section}>
        <Card
          data={cardData}
        />
      </View>
      <Contador 
        textStyle={styles.sectionText} 
        containerStyle={styles.secondaryCard}  
      />
    </ScrollView>
  );
}