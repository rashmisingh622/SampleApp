import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = (props) => {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center"
      }}>
        <Text>Hello {props.name}!!</Text>
    </View>
  )
}

export default HelloWorldApp;