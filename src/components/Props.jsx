import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Child from './Child';


export default function Props() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
  return (
    <View>
      <Text style={ { fontSize : 20 } }>Props</Text>
      <Button title='Counter' onPress={ () => setCount(count + 1)}/>
      <Button title='Item' onPress={ () => setItem(item * 10)}/>
      <Child data={count} items={ item } />
    </View>
  );
};