import { ColorProps, VariantProps } from '@shopify/restyle';
import Animated from 'react-native-reanimated';

import { AppPressable, usePressableOverlay } from '../buttons/AppPressable';
import { AppIcon, IconName } from '../images_and_icons/icon/AppIcon';
import { AppBox } from '../layout/AppBox';

import { AppTheme, useAppTheme } from '~/view/theme';

type ThemedProps = ColorProps<AppTheme> & VariantProps<AppTheme, 'colors'>;

type Props = {
  testID?: string;
  icon: IconName;
  onPress?: () => void;
  disabled?: boolean;
  color?: ThemedProps['color'];
};

export const IconButton = ({ onPress, icon, disabled, testID, color }: Props) => {
  const { otherSizes, colors, opacity, buttonSizes } = useAppTheme();
  const { s } = buttonSizes;
  const { onPrimary } = colors;
  const { l: layerSize } = otherSizes;

  const opacityValue = disabled ? opacity.high : opacity.none;
  const offset = -((layerSize - s) / 2);

  const { onPressIn, onPressOut, layerStyle } = usePressableOverlay(onPress);

  return (
    <AppPressable
      testID={testID}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}>
      <AppBox
        width={s}
        height={s}
        opacity={opacityValue}
        alignItems="center"
        justifyContent="center">
        <AppIcon name={icon} color={color} />
      </AppBox>

      <Animated.View
        style={[
          {
            position: 'absolute',
            borderRadius: layerSize / 2,
            width: layerSize,
            height: layerSize,
            backgroundColor: onPrimary,
            top: offset,
            left: offset
          },
          layerStyle
        ]}
      />
    </AppPressable>
  );
};
