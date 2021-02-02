import React from 'react'
import { Text, View, Button } from 'react-native'
import useTranslation from '@/Hooks/useTranslation.effect'
import useMount from '@/Hooks/useMount.effect'

const First = ({ navigation }) => {
  const { __ } = useTranslation()
  useMount(() => {
    navigation.setOptions({ title: __('first') })
  })
  return (
    <View>
      <Text>{__('first')}</Text>
      <Button
        title={__('second')}
        onPress={() => {
          navigation.navigate('Second')
        }}
      />
    </View>
  )
}

export default First
