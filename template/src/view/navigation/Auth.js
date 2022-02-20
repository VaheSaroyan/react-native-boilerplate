import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthScreen } from '~/view/screens/Auth';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={screenOptions}>
    <AuthStack.Screen name="AuthScreen" component={AuthScreen} />
  </AuthStack.Navigator>
);
