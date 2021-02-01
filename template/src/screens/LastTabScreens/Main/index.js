import React from 'react'
import {Button, Text, View} from 'react-native'
import {useTheme} from '@/theme'
import useTranslation from '@/hooks/useTranslation.effect'
import {connect} from 'react-redux'
import {navigateAndSimpleReset} from '@/navigation/config/Root'
import useMount from '@/hooks/useMount.effect'
import {signOut} from "@/store/reducers/user/actions";
import {changeTheme} from "@/store/reducers/theme/actions";

const Main = ({navigation, ...props}) => {
    const {changeTheme} = props;

    const {Fonts} = useTheme()
    const {__, setLanguage} = useTranslation()


    useMount(() => {
        navigation.setOptions({title: __('Settings')})
    })
    return (
        <View>
            <Text style={Fonts.textRegular}>{__('dark_mode')} :</Text>
            <Button
                onPress={() => changeTheme({darkMode: null})}
                title={__('auto')}
            />
            <Button
                onPress={() => changeTheme({darkMode: true})}
                title={__('dark')}
            />
            <Button
                onPress={() => changeTheme({darkMode: false})}
                title={__('light')}
            />
            <Text style={Fonts.textRegular}>{__('language')} :</Text>
            <Button onPress={() => setLanguage('en')} title={__('en')}/>
            <Button onPress={() => setLanguage('ru')} title={__('ru')}/>

            <Button
                onPress={() => {
                    navigateAndSimpleReset('PrivateStackNavigator')
                    props.signOut()
                }}
                title={__('sign_out')}
            />
        </View>
    )
}
const mapDispatchToProps = {
    signOut,
    changeTheme
}
export default connect(null, mapDispatchToProps)(Main)
