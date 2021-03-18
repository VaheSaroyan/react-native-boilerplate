import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen } from '@/views/screens'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { isReadyRef, navigationRef } from './config/Root'
import { SafeAreaView, StatusBar } from 'react-native'
import { useTheme } from '@/views/theme'
import { AppearanceProvider } from 'react-native-appearance'
import { TabNavigator } from './Tab'
import PrivateStackNavigator from './PrivateStackNavigator'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()

  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = useSelector(({ startup }) => startup.loading)
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)

  useEffect(() => {
    if (!applicationIsLoading) {
      setIsApplicationLoaded(true)
    }
  }, [applicationIsLoading])

  return (
    <AppearanceProvider>
      <SafeAreaView
        style={[
          Layout.fill,
          { backgroundColor: applicationIsLoading ? colors.blue : colors.card },
        ]}
      >
        <NavigationContainer
          theme={NavigationTheme}
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true
          }}
        >
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator headerMode={'none'} mode={'modal'}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            {isApplicationLoaded && isAuthenticated && (
              <Stack.Screen
                name="AppMainNavigator"
                component={TabNavigator}
                options={{
                  animationEnabled: false,
                }}
              />
            )}
            {isApplicationLoaded && !isAuthenticated && (
              <Stack.Screen
                name="PrivateStackNavigator"
                component={PrivateStackNavigator}
                options={{
                  animationEnabled: false,
                }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppearanceProvider>
  )
}

export default ApplicationNavigator
