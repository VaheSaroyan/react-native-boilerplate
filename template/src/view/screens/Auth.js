import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import Config from 'react-native-config';

import useTheme from '~/view/hooks/useTheme';

const { API_BASE } = Config;

export const AuthScreen = () => {
  const navigation = useNavigation();
  const { Gutters } = useTheme();

  const goToHome = React.useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={[Gutters.MT20, Gutters.ML20]}>Auth Screen {API_BASE}</Text>
      <TouchableOpacity onPress={goToHome} style={[Gutters.MT20, Gutters.ML20]}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
};
