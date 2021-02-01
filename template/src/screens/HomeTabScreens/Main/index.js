import React, { useState } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import { Button, Text, TextInput, View } from 'react-native'
import { createStructuredSelector } from "reselect";
import { Brand } from '@/components'
import { useTheme } from '@/theme'
import useTranslation from '@/hooks/useTranslation.effect'
import useMount from '@/hooks/useMount.effect'
import {selectFetchOneUserError, selectFetchOneUserLoading} from "@/store/reducers/user/selectors";
import userApi from "@/store/reducers/user/api";

const SignInScreen = ({ navigation, route,fetchOneUserLoading,fetchOneUserError }) => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const { __ } = useTranslation()
  const dispatch = useDispatch()

  useMount(() => {
    navigation.setOptions({ title: __('Home') })
  })

  const user = useSelector((state) => state.user)

  const [userId, setUserId] = useState('1')

  const fetch = (id) => {
    setUserId(id)
    dispatch(userApi.getUser(id))
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
const mapStateToProps = createStructuredSelector({
    fetchOneUserLoading: selectFetchOneUserLoading,
    fetchOneUserError: selectFetchOneUserError,
});

export default connect(mapStateToProps)(SignInScreen)
