import React from 'react';
import { View, Text } from 'react-native';
function CounterDisplay({ count }) {
  return (
    <View>
      <Text>Current Count: {count}</Text>
    </View>
  );
}
export default CounterDisplay;