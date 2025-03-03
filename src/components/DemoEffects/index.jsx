import React, { useState, useEffect } from 'react';
import { View, Text, Button, Dimensions } from 'react-native';

export default function DemoEffects() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    console.log('O contador mudou para:', count);
  }, [count]);

  useEffect(() => {
    function alteraJanela() {
      const width = Dimensions.get('window').width;
      setScreenWidth(width);
    }
    Dimensions.addEventListener('change', alteraJanela);

    return () => {
      Dimensions.removeEventListener('change', alteraJanela);
      console.log('desmontado');
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Width atual da tela: {screenWidth}</Text>
      <Text style={{ marginTop: 20 }}>
        Dados do fetch: {data ? data.title : 'Carregando...'}
      </Text>

      <Text style={{ marginTop: 20 }}>Contador: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
    </View>
  );
}
