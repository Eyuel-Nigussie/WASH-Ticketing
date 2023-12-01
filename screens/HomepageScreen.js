import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/home.png')} // Replace with the path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../assets/icon.png')} // Replace with the path to your logo
            style={styles.logo}
          />
          <Text style={styles.headerText}>WASH App</Text>
        </View>

        {/* Information Sections */}
        <View style={[styles.infoSection, styles.translucentBackground]}>
          <Text style={styles.infoTitle}>Welcome to WASH App</Text>
          <Text style={styles.infoText}>
            Explore and manage water, sanitation, and hygiene-related issues with ease.
          </Text>
        </View>

        <View style={[styles.infoSection, styles.translucentBackground]}>
          <Text style={styles.infoTitle}>How Can We Help?</Text>
          <Text style={styles.infoText}>
            Report issues, track requests, and stay informed about water and sanitation services.
          </Text>
        </View>

        {/* Interactive Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.translucentBackground]}
            onPress={() => navigation.navigate('RequestScreen')}
          >
            <Text style={styles.buttonText}>Report an Issue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.translucentBackground]}
            onPress={() => navigation.navigate('MyRequestsScreen')}
          >
            <Text style={styles.buttonText}>My Requests</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    // Add any additional styling for your logo
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Set text color to white
  },
  infoSection: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
  },
  translucentBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Use rgba for a translucent black background
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFF', // Set text color to white
  },
  infoText: {
    fontSize: 16,
    color: '#FFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
