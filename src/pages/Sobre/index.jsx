import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';

export default function Sobre() {
  const cardData1 = {
    icon: "wallet",
    title: "Ativos Financeiros",
    text: "Ações, ETFs, Criptomoedas e Commodidades disponíveis para negociação virtual",
    containerStyle: styles.primaryCard,
    titleStyle: styles.gridTitle,
    textStyle: styles.gridText,
    iconColor: "#fff"
  };

  const cardData2 = {
    icon: "stats-chart",
    title: "Bolsa de Valores",
    text: "Mercado organizado onde ocorrem negociações de valores mobiliários",
    containerStyle: styles.secondaryCard,
    titleStyle: styles.gridTitle,
    textStyle: styles.gridText,
    iconColor: "#fff"
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.grid}>
        <Card data={cardData1} />
        <Card data={cardData2} />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
