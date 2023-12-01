import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserProfileScreen = () => {

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
    <View style={{ flex: 1, padding: 20, backgroundColor: '#F2F2F2' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#003366', marginBottom: 20 }}>
        User Profile
      </Text>

      <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: 8, marginBottom: 20 }}>
        <Text style={{ color: '#003366', fontSize: 18, marginBottom: 10 }}>
          Username: {userData.username}
        </Text>
        <Text style={{ color: '#003366', fontSize: 16, marginBottom: 10 }}>
          Email: {userData.email}
        </Text>
        <Text style={{ color: '#003366', fontSize: 16 }}>Phone: +2519xxxxxxxxx</Text>
        {/* Add more user details here */}
      </View>

      <TouchableOpacity
        style={{ backgroundColor: '#003366', padding: 16, borderRadius: 8, marginBottom: 20 }}
      >
        <Text style={{ color: '#FFF', fontSize: 16, textAlign: 'center' }}>
          Edit Profile <Icon name="edit" size={18} color="#FFF" />
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: '#FF4D4F', padding: 16, borderRadius: 8, marginBottom: 20 }}
        onPress={handleSignOut}
      >
        <Text style={{ color: '#FFF', fontSize: 16, textAlign: 'center' }}>
          Sign Out <Icon name="sign-out" size={18} color="#FFF" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileScreen;
