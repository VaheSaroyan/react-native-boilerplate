import React from 'react'
import { Text, View } from 'react-native'
import useTranslation from '@/hooks/useTranslation.effect'
import useMount from '@/hooks/useMount.effect'

const Second = ({ navigation }) => {
  const { __ } = useTranslation()

  useMount(() => {
    navigation.setOptions({ title: __('second') })
  })

  return (
    <View>
      <Text>{__('second')}</Text>
    </View>
  )
}

export default Second
