import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-4xl text-white font-bold mb-6">Sign In</Text>

      <TextInput
        className="bg-white w-80 p-2 mb-4 rounded-md"
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        className="bg-white w-80 p-2 mb-4 rounded-md"
        placeholder="Password"
        secureTextEntry
      />

      <TouchableOpacity className="bg-white p-2 rounded-md`">
        <Text className="text-blue-500 text-center">Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
