import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, View } from 'react-native'
import { Logo } from '@/views/components'
import { useTheme } from '@/views/theme'
import { navigateAndSimpleReset } from '@/navigation/config/Root'
import SignIn from '@/store/reducers/User/SignIn'
import useTranslation from '@/hooks/useTranslation.effect'
import useMount from '@/hooks/useMount.effect'

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
        <Logo />
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
