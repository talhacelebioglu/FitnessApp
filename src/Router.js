import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberDetails from './pages/MemberDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="Member Sign"
          component={MemberSign}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Member Details" component={MemberDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
