import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SignIn from './Signin'
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
   const navigation = useNavigation();

   const navigateToSignIn = () => {
        navigation.navigate('SignIn'); // Replace 'SignIn' with the name of your SignIn screen
   };
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl text-black font-bold mb-6">Sign Up</Text>

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

      <TextInput
        className="bg-white w-80 p-2 mb-4 rounded-md"
        placeholder="Confirm Password"
        secureTextEntry
      />

      <TextInput
        className="bg-white w-80 p-2 mb-4 rounded-md"
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />

      <TouchableOpacity className="bg-white p-2 rounded-md">
        <Text className="text-blue-500 text-center">Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSignIn}>
        <Text className="text-black mt-4'">Already have an account? <Text className="text-blue-500">Sign In</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
