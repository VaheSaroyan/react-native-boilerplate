import * as React from 'react';

import RNBootSplash from 'react-native-bootsplash';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '~/store';
import { useMount } from '~/view/hooks/useMount';
import { AppNavigator } from '~/view/navigation/App';

export const RootApp = () => {
  useMount(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true }); // fade
    });
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <AppNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
