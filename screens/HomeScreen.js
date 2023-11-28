// FirstScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const FirstScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>First Screen</Text>
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

export default FirstScreen;
