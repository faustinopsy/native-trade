import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';
function Contador({data }) {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  }
  const decrementCounter = () => {
    setCount(prevCount => prevCount - 1);
  }
  const carrinho = () => {
    setCart([...cart, count]);
  }
  return (
    <View style={data.containerStyle}>
      <CounterDisplay count={count} />
      <CounterDisplay count={cart} />
      <View style={data.containerButton}>
        <CounterButton onIncrement={incrementCounter} text="Incremento"/>
        <CounterButton onIncrement={decrementCounter} text="Decremento"/>
        <CounterButton onIncrement={carrinho} text="Carrinho"/>
      </View>
      {
          count	%	2	==	0 
          ?	<Text>O	número	é	par!</Text>
          :	<Text>O	número	é	ímpar!</Text>
			}
    </View>
  );
}

export default Contador;


//componente unico
// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// function Contador({data }) {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={data.containerStyle}>
//       <Text style={data.textStyle}>Você clicou {count} vezes</Text>
//       <View style={data.containerButton}>
//         <Button style={data.botao} title="Aumentar" onPress={() => setCount(count + 1)} />
//         <Button style={data.botao} title="Diminuir" onPress={() => setCount(count - 1)} />
//       </View>
//       {
//           count	%	2	==	0
//           ?	<Text>O	número	é	par!</Text>
//           :	<Text>O	número	é	ímpar!</Text>
// 			}
//     </View>
//   );
// }

// export default Contador;
