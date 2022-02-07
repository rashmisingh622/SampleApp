/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HelloWorldApp from './HelloWorld';

const App = () => {
  const [count, setCount] = useState(0);
  return (
      //<HelloWorldApp name='Amiya' />
      <View style={styles.container} >
        <Text> You clicked {count} times... </Text>
        <Button 
          onPress={() => setCount(count + 1)}
          title = "Click Me!"
        />
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
