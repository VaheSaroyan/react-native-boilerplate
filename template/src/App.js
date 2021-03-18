import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from '@/store'
import ApplicationNavigator from '@/navigation'
import { SplashScreen } from '@/views/screens'
import Translations from '@/translations'

const App = () => (
  <Translations>
    <Provider store={store}>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  </Translations>
)

export default App
