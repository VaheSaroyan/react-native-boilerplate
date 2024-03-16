import { useKeyboardContext } from 'react-native-keyboard-controller';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { useKeyboard } from './useKeyboard';

/**
 * -//-
 *
 * @param offset to be removed from keyboard height as it includes in keyboard height
 */
export function useBaseAnimatedKeyboard(offset?: number) {
  const keyboard = useKeyboard();
  const context = useKeyboardContext();
  const { height, progress } = context.reanimated;

  const translateY = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(progress.value, [0, 1], [0, height.value + (offset ?? 0)])
        }
      ] as any
    };
  }, [offset]);

  return {
    translateY,
    keyboardState: progress,
    keyboard
  };
}
