// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThirdScreen from './screens/SecondScreen';
import SignInScreen from './screens/Signin';
import SignUpScreen from './screens/SignUp';
import Profile from './screens/Profile';
import RequestScreen from './screens/request';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="">
    <Stack.Screen name="SignIn" component={SignInScreen} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen  name="Home" component={HomeStack} />
        <Tab.Screen name="Request" component={RequestScreen} />
        <Tab.Screen name="Third" component={ThirdScreen} />
        <Tab.Screen name="Forth" component={ThirdScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
