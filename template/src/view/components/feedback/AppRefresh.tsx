import { FC } from 'react';
import { RefreshControl, RefreshControlProps } from 'react-native';

import { useAppTheme } from '~/view/theme';

interface Props extends RefreshControlProps {}

export const AppRefresh: FC<Props> = props => {
  const { colors } = useAppTheme();
  return (
    <RefreshControl
      colors={[colors.surface, colors.primary]}
      tintColor={colors.onSurface}
      {...props}
    />
  );
};
