import React from 'react'
import {connect, useDispatch} from 'react-redux'
import {Button, View} from 'react-native'
import {Brand} from '@/components'
import {useTheme} from '@/theme'
import {navigateAndSimpleReset} from '@/navigation/config/Root'
import useTranslation from '@/hooks/useTranslation.effect'
import useMount from '@/hooks/useMount.effect'
import {signIn} from "@/store/reducers/user/actions";

const SignInScreen = ({navigation, ...props}) => {
    const {Gutters, Layout} = useTheme()
    const {__} = useTranslation()
    const dispatch = useDispatch()

    useMount(() => {
        navigation.setOptions({title: __('sign_in')})
    })

    return (
        <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
            <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
                <Brand/>
            </View>

            <Button
                onPress={() => {
                    navigateAndSimpleReset('AppMainNavigator')
                    props.signIn()
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
const mapDispatchToProps = {
    signIn
}
export default connect(null,mapDispatchToProps)(SignInScreen)
