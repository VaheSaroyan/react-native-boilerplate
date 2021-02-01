import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import config from '@/navigation/config/navigation.config'

const createStack = (stack) => {
  const navigator = { [stack]: createStackNavigator() }
  const Navigator = navigator[stack]
  return (routes) => () => {
    return (
      <Navigator.Navigator screenOptions={config.privateStack}>
        {routes.map((item) => (
          <Navigator.Screen {...item} />
        ))}
      </Navigator.Navigator>
    )
  }
}
export default createStack
