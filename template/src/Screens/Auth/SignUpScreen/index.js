import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '@/Theme'
import useTranslation from '@/Hooks/useTranslation.effect'
import useMount from '@/Hooks/useMount.effect'

const SignUpScreen = ({ navigation }) => {
  const { Fonts, Gutters, Layout } = useTheme()
  const { __ } = useTranslation()

  useMount(() => {
    navigation.setOptions({ title: __('sign_up') })
  })

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <Text style={Fonts.textRegular}>{__('sign_up')}</Text>
    </View>
  )
}

export default SignUpScreen
