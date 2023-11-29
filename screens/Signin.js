import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  const navigateToSignIn = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl text-black font-bold mb-6">Sign In</Text>

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
        <Text className="text-black text-center">Sign In</Text>
      </TouchableOpacity>
      <View className="flex-row">
        <Text className="text-black">Already have an account? </Text>
        <TouchableOpacity onPress={navigateToSignIn}>
          <Text className="text-blue-500">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
