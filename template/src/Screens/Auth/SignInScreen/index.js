import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, View } from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import { navigateAndSimpleReset } from '@/Navigation/config/Root'
import SignIn from '@/Reducers/User/SignIn'
import useTranslation from '@/Hooks/useTranslation.effect'
import useMount from '@/Hooks/useMount.effect'

const SignInScreen = ({ navigation }) => {
  const { Gutters, Layout } = useTheme()
  const { __ } = useTranslation()
  const dispatch = useDispatch()

  useMount(() => {
    navigation.setOptions({ title: __('sign_in') })
  })

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
      </View>

      <Button
        onPress={() => {
          navigateAndSimpleReset('AppMainNavigator')
          dispatch(SignIn.action())
        }}
        title={__('sign_in')}
      />
      <Button
        onPress={() => {
          navigation.navigate('SignUp')
        }}
        title={__('SignUpScreen')}
      />
    </View>
  )
}

export default SignInScreen
