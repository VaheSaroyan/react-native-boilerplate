import { FC, PropsWithChildren, useRef } from 'react';
import { GestureResponderEvent, Pressable, PressableProps } from 'react-native';

import isUndefined from 'lodash/isUndefined';
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useAppTheme } from '~/view/theme';

interface AppPressableProps extends PressableProps {
  testID?: string;
  onDoublePress?: () => void;
}

export const AppPressable: FC<PropsWithChildren<AppPressableProps>> = ({
  testID,
  children,
  ...props
}) => {
  const singleTapTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
  const prevPressTime = useRef<number | null>(null);

  const clear = () => {
    clearTimeout(singleTapTimeout.current);
    singleTapTimeout.current = undefined;
  };

  const handlePress = (e: GestureResponderEvent) => {
    if (isUndefined(props.onDoublePress)) {
      const currentPressTime = Date.now();

      if (prevPressTime.current && currentPressTime - prevPressTime.current < 500) {
        return;
      }

      prevPressTime.current = currentPressTime;
      props.onPress?.(e);
    } else {
      if (singleTapTimeout.current) {
        props.onDoublePress?.();
        clear();
      } else {
        singleTapTimeout.current = setTimeout(() => {
          props.onPress?.(e);
          clear();
        }, 300);
      }
    }
  };

  return (
    <Pressable
      testID={testID}
      accessibilityLabel={testID}
      {...props}
      onPress={handlePress}
      unstable_pressDelay={100}>
      {children}
    </Pressable>
  );
};

export const usePressableOverlay = (onPress?: (params?: any) => void) => {
  const { opacity } = useAppTheme();

  const anim = useSharedValue(0);

  const layerStyle = useAnimatedStyle(() => ({
    opacity: interpolate(anim.value, [0, 1], [0, opacity.highest])
  }));

  const onPressIn = () => {
    if (onPress) {
      anim.value = withTiming(1, { duration: 150 });
    }
  };

  const onPressOut = () => {
    if (onPress) {
      anim.value = withTiming(0, { duration: 150 });
    }
  };

  return {
    layerStyle,
    onPressIn,
    onPressOut,
    anim
  };
};
