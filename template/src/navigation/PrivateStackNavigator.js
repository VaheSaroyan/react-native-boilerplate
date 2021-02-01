import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import routes from '@/routes/routes.private'
import config from '@/navigation/config/navigation.config'

const PrivateStack = createStackNavigator()
// @refresh reset
const PrivateStackNavigator = () => {
  return (
    <PrivateStack.Navigator screenOptions={config.privateStack}>
      {routes.map((item) => (
        <PrivateStack.Screen {...item} />
      ))}
    </PrivateStack.Navigator>
  )
}

export default PrivateStackNavigator
