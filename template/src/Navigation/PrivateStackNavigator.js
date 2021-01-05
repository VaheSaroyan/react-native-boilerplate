import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import routes from '@/Routes/routes.private'
import config from '@/Navigation/config/navigation.config'

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
