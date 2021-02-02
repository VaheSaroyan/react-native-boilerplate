import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import { navigateAndSimpleReset } from '@/navigation/config/Root'
import DefaultTheme from '@/reducers/Theme/DefaultTheme'

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions(
    'startup/init',
    async (args, { dispatch, getState }) => {
      const {
        user: { isAuthenticated },
      } = getState()
      // Timeout to fake waiting some process
      // Remove it, or keep it if you want display a beautiful splash screen ;)
      // await new Promise((resolve) => setTimeout(resolve, 1500))
      // Here we load the user 1 for example, but you can for example load the connected user
      // await dispatch(FetchOne.action(1))
      await dispatch(DefaultTheme.action({ theme: 'default', darkMode: null }))
      // Navigate and reset to the main navigator

      if (isAuthenticated) {
        navigateAndSimpleReset('AppMainNavigator')
      } else {
        navigateAndSimpleReset('PrivateStackNavigator')
      }
    },
  ),
  reducers: buildAsyncReducers({ itemKey: null }), // We do not want to modify some item by default
}
