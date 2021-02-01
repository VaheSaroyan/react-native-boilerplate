import {navigateAndSimpleReset} from "@/navigation/config/Root";
import {setDefaultTheme} from "@/store/reducers/theme/actions";


export const appInit = () => async (dispatch, getState) => {
    const {
        user: {isAuthenticated},
    } = getState()
    // Timeout to fake waiting some process
    // Remove it, or keep it if you want display a beautiful splash screen ;)
    // await new Promise((resolve) => setTimeout(resolve, 1500))
    // Here we load the user 1 for example, but you can for example load the connected user
    // await dispatch(FetchOne.action(1))
    await dispatch(setDefaultTheme({theme: 'default',
        darkMode: null}))
    if (isAuthenticated) {
        navigateAndSimpleReset('AppMainNavigator')
    } else {
        navigateAndSimpleReset('PrivateStackNavigator')
    }
}

