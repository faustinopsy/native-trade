import React from 'react';
import { View, Button } from 'react-native';
function CounterButton({ onIncrement, text }) {
  return (
    <View>
      <Button onPress={onIncrement} title={text} />
    </View>
  );
}
export default CounterButton;
