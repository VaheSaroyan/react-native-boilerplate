import { FC, PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { BoxProps } from '@shopify/restyle';
import Animated from 'react-native-reanimated';

import { AppPressable, usePressableOverlay } from '../../buttons/AppPressable';
import { AppBox } from '../AppBox';

import { AppTheme, useAppTheme } from '~/view/theme';

interface Props extends BoxProps<AppTheme> {
  style?: StyleProp<ViewStyle> | undefined;
  onPress?: () => void;
  onDoublePress?: () => void;
  disabled?: boolean;
}

/**
 * Use this component for the card/tile components.
 * Aims to handle borderRadius, padding and bg color
 */
export const AppCard: FC<PropsWithChildren<Props>> = ({
  children,
  style,
  onPress,
  onDoublePress,
  disabled,
  ...restProps
}) => {
  const { colors } = useAppTheme();

  const { onPressIn, onPressOut, layerStyle } = usePressableOverlay(onPress);

  return (
    <AppPressable
      onDoublePress={onDoublePress}
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <AppBox
        overflow="hidden"
        padding="m"
        borderRadius="m"
        backgroundColor="surfaceContainer"
        style={style}
        {...restProps}>
        {children}

        <Animated.View
          pointerEvents={'none'}
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: colors.onPrimary
            },
            layerStyle
          ]}
        />
      </AppBox>
    </AppPressable>
  );
};
