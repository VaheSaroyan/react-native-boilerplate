import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppButton, AppButtonProps } from './AppButton';
import { AppBox } from '../layout/AppBox';

import { useBaseAnimatedKeyboard } from '~/utils';

export const AnimatedButton = ({
  onPress,
  loading,
  disabled,
  type,
  testID,
  title
}: AppButtonProps) => {
  const insets = useSafeAreaInsets();
  const { translateY } = useBaseAnimatedKeyboard(insets.bottom);

  return (
    <Animated.View style={translateY}>
      <AppBox borderRadius="m" backgroundColor="surface">
        <AppButton
          title={title}
          onPress={onPress}
          type={type}
          loading={loading}
          disabled={disabled}
          testID={testID}
        />
      </AppBox>
    </Animated.View>
  );
};
