// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ThirdScreen from './screens/SecondScreen';
import SignInScreen from './screens/Signin';
import Profile from './screens/Profile';
import RequestScreen from './screens/RequestScreen';
import MyRequestScreen from './screens/MyRequestsScreen';
import RequestDetailScreen from './screens/RequestDetail';
import SignUpScreen from './screens/SignUp';
import FAQScreen from './screens/FAQScreen';
import HomepageScreen from './screens/HomepageScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="">
    <Stack.Screen name="Homepage" component={HomepageScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="RequestDetail" component={RequestDetailScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="WASH Ticketing"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Request Issue"
          component={RequestScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alert" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My Requests"
          component={MyRequestScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clipboard-list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="FAQ"
          component={FAQScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
