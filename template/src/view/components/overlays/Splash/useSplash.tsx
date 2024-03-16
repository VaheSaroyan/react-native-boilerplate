import { useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, useWindowDimensions } from 'react-native';

import * as BootSplash from 'react-native-bootsplash';
import {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming
} from 'react-native-reanimated';

import { useSplashVisible } from '~/modules/app';
import { useAppTheme } from '~/view/theme';

const ANIM_DURATION = 4000;

const SCREEN_H = Dimensions.get('screen').height;

export const useSplash = () => {
  const { width } = useWindowDimensions();
  const { colors } = useAppTheme();
  const { hideSplash } = useSplashVisible();
  const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  const [animatedText, setAnimatedText] = useState('Boilerplate');

  const anim = useSharedValue<number>(0);
  const splashOpacity = useSharedValue(1);

  const handleHideSplash = () => {
    setBootSplashIsVisible(false);
    hideSplash();
  };

  const viewStyle = useAnimatedStyle(
    () => ({
      ...StyleSheet.absoluteFillObject,
      opacity: splashOpacity.value,
      backgroundColor: colors.surface
    }),
    []
  );

  const textContainerStyle = useAnimatedStyle(
    () => ({
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      height: SCREEN_H,
      width,
      opacity: interpolate(
        anim.value,
        [0, 0.15, 0.25, 0.4, 0.55, 0.65, 0.8, 1],
        [0, 1, 1, 0, 1, 1, 0, 0]
      )
    }),
    []
  );

  const swooshOverlayStyle = useAnimatedStyle(
    () => ({
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.surface,
      opacity: interpolate(anim.value, [0, 0.95, 1], [1, 1, 0]),
      transform: [
        {
          translateX: interpolate(anim.value, [0, 0.85, 0.95], [0, 0, width])
        }
      ]
    }),
    []
  );

  useEffect(() => {
    // make sure Splash will be hidden anyway since 4 sec after mount
    if (Platform.OS === 'android') {
      const t = setTimeout(() => {
        handleHideSplash();
      }, 5000);

      return () => {
        clearTimeout(t);
      };
    }
  }, []);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      await BootSplash.hide({ fade: true });

      setTimeout(() => {
        setAnimatedText('Made with ❤️ by @vahesaroyan');
      }, (ANIM_DURATION / 5) * 2 + 500);

      anim.value = withDelay(
        500,
        withTiming(1, { duration: ANIM_DURATION, easing: Easing.linear }, finished => {
          if (finished) {
            splashOpacity.value = withTiming(0, {}, finished1 => {
              if (finished1) {
                runOnJS(handleHideSplash)();
              }
            });
          }
        })
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      handleHideSplash();
    }
  };

  return {
    animatedText,
    bootSplashIsVisible,
    viewStyle,
    textContainerStyle,
    swooshOverlayStyle
  };
};
