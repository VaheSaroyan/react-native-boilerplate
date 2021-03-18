import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LastTabScreensMain } from '@/views/screens'

const Stack = createStackNavigator()

export const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={LastTabScreensMain} />
    </Stack.Navigator>
  )
}
