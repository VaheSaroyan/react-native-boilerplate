import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '~/view/screens/Home';

const screenOptions = {
  gestureEnabled: true,
  headerShown: false,
};

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={screenOptions}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
);
