import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import config from '@/navigation/config/navigation.config'
import { SignInScreen, SignUpScreen } from '@/views/screens/Auth'

const PrivateStack = createStackNavigator()

const PrivateStackNavigator = () => {
  return (
    <PrivateStack.Navigator screenOptions={config.privateStack}>
      <PrivateStack.Screen name="SignIn" component={SignInScreen} />
      <PrivateStack.Screen name="SignUp" component={SignUpScreen} />
    </PrivateStack.Navigator>
  )
}

export default PrivateStackNavigator
