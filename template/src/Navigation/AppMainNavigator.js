import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { tabRoutes } from '@/Routes/routes'
import useTranslation from '@/Hooks/useTranslation.effect'

const Tab = createBottomTabNavigator()

// @refresh reset
const AppMainNavigator = () => {
  const { __ } = useTranslation()
  return (
    <Tab.Navigator>
      {tabRoutes.map((item) => (
        <Tab.Screen
          {...item}
          options={{
            ...item.options,
            tabBarLabel: __(item.options.tabBarLabel),
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default AppMainNavigator
