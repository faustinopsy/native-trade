import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Contador({data }) {
  const [count, setCount] = useState(0);

  return (
    <View style={data.containerStyle}>
      <Text style={data.textStyle}>Você clicou {count} vezes</Text>
      <Button title="Clique" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default Contador;
