import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator } from './Auth';
import { HomeNavigator } from './Home';

const AppStack = createNativeStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name="Auth" component={AuthNavigator} />
      <AppStack.Screen name="Home" component={HomeNavigator} />
    </AppStack.Navigator>
  </NavigationContainer>
);
