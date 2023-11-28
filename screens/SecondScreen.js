// SecondScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Second Screen</Text>
      <Button
        title="Go to First Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SecondScreen;
