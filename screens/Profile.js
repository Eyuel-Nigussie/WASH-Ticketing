import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const UserProfileScreen = () => {
  const navigation = useNavigation();

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSignOut = () => {
    // Perform sign-out logic here
    // For example, clear user authentication state, navigate to sign-in, etc.
  };

  // Replace this with your user data
  const userData = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    // Add more user details as needed
  };

  return (
    <View className="flex-1 justify-center items-center bg-green-500">
      <Text className="text-4xl text-white font-bold mb-6">User Profile</Text>

      <View className="bg-white p-4 rounded-md w-80 mb-4">
        <Text className="text-blue-500 text-lg">Username: {userData.username}</Text>
        <Text>Email: {userData.email}</Text>
        {/* Add more user details here */}
      </View>

      <TouchableOpacity className="bg-white p-2 rounded-md mb-4">
        <Text className="text-blue-500 text-center">Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-white p-2 rounded-md mb-4" onPress={handleSignOut}>
        <Text className="text-red-500 text-center">Sign Out</Text>
      </TouchableOpacity>

      <View className="flex-row">
        <Text className="text-white">Already have an account? </Text>
        <TouchableOpacity onPress={navigateToSignIn}>
          <Text className="text-blue-500">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfileScreen;
