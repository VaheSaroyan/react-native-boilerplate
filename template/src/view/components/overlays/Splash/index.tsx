import Animated from 'react-native-reanimated';

import { useSplash } from './useSplash';
import { AppBox, AppScreen } from '../../layout';
import { AppText } from '../../text';

import { useAppVersion } from '~/utils';
import { useAppTheme } from '~/view/theme';

export const Splash = () => {
  const { spacing } = useAppTheme();
  const { bootSplashIsVisible, viewStyle, animatedText, textContainerStyle } = useSplash();

  const appVersion = useAppVersion();
  if (!bootSplashIsVisible) {
    return null;
  }

  return (
    <Animated.View style={viewStyle}>
      <AppScreen withTop topOffset={spacing.xxl} withHorizontal={false}>
        {/*<AppBox alignSelf="center">*/}
        {/*  <AppSvgImage name="logo-text" size={156} />*/}
        {/*</AppBox>*/}

        <AppBox flex={1} justifyContent="center" />
        <AppText centered>{appVersion}</AppText>
      </AppScreen>

      <Animated.View style={textContainerStyle}>
        <AppText variant="displaySmall" centered>
          {animatedText}
        </AppText>
      </Animated.View>
    </Animated.View>
  );
};
