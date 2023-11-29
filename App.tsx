// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThirdScreen from './screens/SecondScreen';
import SignInScreen from './screens/Signin';
import Profile from './screens/Profile';
import RequestScreen from './screens/RequestScreen';
import MyRequestScreen from './screens/MyRequestsScreen';
import RequestDetailScreen from './screens/RequestDetail';
import SignUpScreen from './screens/SignUp';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="">
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="RequestDetail" component={RequestDetailScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  name="WASH Ticketing" component={HomeStack} />
        <Tab.Screen name="Request Issue" component={RequestScreen} />
        <Tab.Screen name="My Requests" component={MyRequestScreen} />
        <Tab.Screen name="Forth" component={ThirdScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
