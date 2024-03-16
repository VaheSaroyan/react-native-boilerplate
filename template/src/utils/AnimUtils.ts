import { LayoutChangeEvent } from 'react-native';

import { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useBaseAnimatedKeyboard } from './hooks';

export const useScreenAnim = () => {
  const insets = useSafeAreaInsets();
  const { keyboardState } = useBaseAnimatedKeyboard(insets.bottom);

  const contentY = useSharedValue<number>(0);

  const onContentLayout = (e: LayoutChangeEvent) => {
    contentY.value = e.nativeEvent.layout.y;
  };

  const contentStyle = useAnimatedStyle(() => ({
    flex: 1,
    transform: [
      {
        translateY: interpolate(keyboardState.value, [0, 1], [0, -contentY.value])
      }
    ] as any
  }));

  return {
    contentStyle,
    onContentLayout
  };
};
