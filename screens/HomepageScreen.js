import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const HomeScreen = ({ navigation }) => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay={true}
      autoplayTimeout={4} // Adjust the timeout as needed
    >
      <ImageBackground
        source={require('../assets/splash.png')}
        style={styles.background}
      >
        <View style={styles.container}>
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

      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.background}
      >
         <View style={styles.container}>
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

      <ImageBackground
        source={require('../assets/home.png')}
        style={styles.background}
      >
         <View style={styles.container}>
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
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  infoSection: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  translucentBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFF',
  },
  infoText: {
    fontSize: 16,
    color: '#FFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
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
