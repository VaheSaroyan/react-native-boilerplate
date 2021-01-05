import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen } from '@/Screens'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './config/Root'
import { SafeAreaView, StatusBar } from 'react-native'
import { useTheme } from '@/Theme'
import { AppearanceProvider } from 'react-native-appearance'
import AutoLogout from '@/HOC/AutoLogout'
import config from '@/Navigation/config/navigation.config'
import { modalRoutes } from '@/Routes/routes'
import useMount from '@/Hooks/useMount.effect'

const Stack = createStackNavigator()

let AppMainNavigator
let PrivateStackNavigator

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()

  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = useSelector(({ startup }) => startup.loading)
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)

  useEffect(() => {
    if (
      AppMainNavigator == null &&
      PrivateStackNavigator == null &&
      !applicationIsLoading
    ) {
      AppMainNavigator = require('./AppMainNavigator').default
      PrivateStackNavigator = require('./PrivateStackNavigator').default
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
          linking={config.linking}
        >
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator headerMode={'none'} mode={'modal'}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            {isApplicationLoaded && isAuthenticated && (
              <Stack.Screen
                name="AppMainNavigator"
                component={AppMainNavigator}
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
            {isApplicationLoaded &&
              modalRoutes &&
              modalRoutes.map((route) => (
                <Stack.Screen
                  {...route}
                  cardOverlayEnabled={false}
                  cardShadowEnabled={false}
                />
              ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppearanceProvider>
  )
}

export default AutoLogout(ApplicationNavigator)
