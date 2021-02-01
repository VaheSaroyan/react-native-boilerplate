import * as React from 'react'
import config from '@/navigation/config/navigation.config'
import { createDrawerNavigator } from '@react-navigation/drawer'

const crateDrawer = (stack) => {
  const navigator = { [stack]: createDrawerNavigator() }
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
export default crateDrawer
