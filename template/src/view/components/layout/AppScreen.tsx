import { forwardRef, PropsWithChildren } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';

import { BoxProps } from '@shopify/restyle';
import isUndefined from 'lodash/isUndefined';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppBox } from './AppBox';
import { AppRefresh } from '../feedback';

import { AppTheme, useAppTheme } from '~/view/theme';

interface Props extends BoxProps<AppTheme> {
  withBottom?: boolean;
  withTop?: boolean;
  withHorizontal?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
  scrollable?: boolean;
  topOffset?: number;
  onRefresh?: () => void;
  refreshing?: boolean;
}

/**
 * Use this component for the root of the "screen".
 * Aims to handle screen insets for all sides using padding prop
 */
export const AppScreen = forwardRef<any, PropsWithChildren<Props>>(
  (
    {
      children,
      withBottom = true,
      withTop = false,
      withHorizontal = true,
      scrollable = false,
      topOffset,
      style,
      refreshing,
      onRefresh,
      ...restProps
    },
    ref
  ) => {
    const insets = useSafeAreaInsets();
    const theme = useAppTheme();
    const { m } = theme.spacing;

    const finalTopOffset = !isUndefined(topOffset) ? topOffset : m;
    const paddingTop = withTop ? insets.top + finalTopOffset : finalTopOffset;
    const paddingBottom = withBottom ? insets.bottom + m : 0;

    return scrollable ? (
      <AppBox flex={1} style={{ paddingBottom, paddingTop }}>
        <ScrollView
          ref={ref}
          bounces={true}
          showsVerticalScrollIndicator={false}
          refreshControl={
            isUndefined(refreshing) ? undefined : (
              <AppRefresh refreshing={refreshing} onRefresh={onRefresh} />
            )
          }>
          <AppBox
            pl={withHorizontal ? 'm' : undefined}
            pr={withHorizontal ? 'm' : undefined}
            style={style}
            {...restProps}>
            {children}
          </AppBox>
        </ScrollView>
      </AppBox>
    ) : (
      <AppBox
        flex={1}
        backgroundColor="surface"
        pl={withHorizontal ? 'm' : undefined}
        pr={withHorizontal ? 'm' : undefined}
        style={{
          paddingTop,
          paddingBottom,
          ...{ ...(style as object) }
        }}
        {...restProps}>
        {children}
      </AppBox>
    );
  }
);
