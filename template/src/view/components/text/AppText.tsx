import { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';

import { createText, TextProps as TextPropsRestyle } from '@shopify/restyle';

import { AppTheme } from '~/view/theme';

const ThemedText = createText<AppTheme>();

export interface AppTextProps extends TextPropsRestyle<AppTheme>, TextProps {
  centered?: boolean;
}

/**
 *
 * @default variant : "bodyMedium"
 */
export const AppText = ({
  centered,
  children,
  style,
  color = 'onSurface',
  ...restProps
}: PropsWithChildren<AppTextProps>) => {
  return (
    <ThemedText
      allowFontScaling={false}
      color={color}
      style={centered ? { textAlign: 'center', ...{ ...(style as object) } } : style}
      {...restProps}>
      {children}
    </ThemedText>
  );
};
