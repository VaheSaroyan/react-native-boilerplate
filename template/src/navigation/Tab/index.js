import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import useTranslation from '@/hooks/useTranslation.effect'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { HomeStack } from '@/navigation/Home'
import { SettingsStack } from '@/navigation/Settings'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  const { __ } = useTranslation()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabel: __('Home'),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cogs" color={color} size={size} />
          ),
          tabBarLabel: __('Settings'),
        }}
        component={SettingsStack}
      />
    </Tab.Navigator>
  )
}
