import { Platform, StatusBar } from 'react-native';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@shopify/restyle';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import { SNACKBAR_CONFIG } from './view/components';
import { darkTheme } from './view/theme';

import { store } from '~/store';
import { Splash } from '~/view/components/overlays';
import { HomeScreen } from '~/view/screens/Home';

import 'react-native-url-polyfill/auto';

StatusBar.setBarStyle('light-content');
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('transparent');
}

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#000' }}>
            <BottomSheetModalProvider>
              <PaperProvider
                theme={{
                  ...MD3DarkTheme,
                  colors: {
                    ...MD3DarkTheme.colors,
                    primary: darkTheme.colors.primary,
                    onPrimary: darkTheme.colors.onPrimary,
                    primaryContainer: darkTheme.colors.primary,
                    error: darkTheme.colors.error
                  }
                }}>
                <KeyboardProvider statusBarTranslucent>
                  <HomeScreen />
                </KeyboardProvider>
                <Splash />
              </PaperProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
          <Toast config={SNACKBAR_CONFIG} />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
