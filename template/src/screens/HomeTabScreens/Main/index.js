import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Text, TextInput, View } from 'react-native'
import { Brand } from '@/components'
import { useTheme } from '@/theme'
import FetchOne from '@/reducers/User/FetchOne'
import useTranslation from '@/hooks/useTranslation.effect'
import useMount from '@/hooks/useMount.effect'

const SignInScreen = ({ navigation, route }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const { __ } = useTranslation()
  const dispatch = useDispatch()

  useMount(() => {
    navigation.setOptions({ title: __('Home') })
  })

  const user = useSelector((state) => state.user.item)
  const fetchOneUserLoading = useSelector(
    (state) => state.user.fetchOne.loading,
  )
  const fetchOneUserError = useSelector((state) => state.user.fetchOne.error)

  const [userId, setUserId] = useState('1')

  const fetch = (id) => {
    setUserId(id)
    dispatch(FetchOne.action(id))
  }
  React.useEffect(() => {
    if (route.params && route.params.id) {
      fetch(route.params.id)
    }
  }, [route.params])
  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />

        {fetchOneUserError ? (
          <Text style={Fonts.textRegular}>{__(fetchOneUserError.message)}</Text>
        ) : (
          <Text style={Fonts.textRegular}>
            {__('example.helloUser', { name: user?.name, value: '' })}
          </Text>
        )}
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Text style={[Layout.fill, Fonts.textCenter]}>
          {__('example.labels.userId')}
        </Text>
        <TextInput
          onChangeText={(text) => fetch(text)}
          editable={!fetchOneUserLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput]}
        />
      </View>
      {route.name === 'HomeScreen' ? (
        <Button
          onPress={() => {
            navigation.navigate('ModalFirst')
          }}
          title={__('full_screen_modal')}
        />
      ) : (
        <Button
          onPress={() => {
            navigation.goBack()
          }}
          title={__('close')}
        />
      )}
      {route.name === 'HomeScreen' && (
        <Button
          onPress={() => {
            navigation.navigate('First')
          }}
          title={__('first')}
        />
      )}
    </View>
  )
}

export default SignInScreen
