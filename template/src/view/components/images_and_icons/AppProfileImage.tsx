import { ImageSourcePropType } from 'react-native';

import {
  border,
  BorderProps,
  color,
  ColorProps,
  composeRestyleFunctions,
  ResponsiveValue,
  useRestyle
} from '@shopify/restyle';

import { AppImage } from './AppImage';
import { AppSvgImage } from './AppSvgImage';
import { AppBox } from '../layout';

import { AppTheme, useAppTheme } from '~/view/theme';

type Props = {
  uri?: ImageSourcePropType;
  placeholder?: ImageSourcePropType;
  background?: ResponsiveValue<keyof AppTheme['colors'], any>;
  borderRadius?: ResponsiveValue<keyof AppTheme['borderRadii'], any>;
  size?: number;
};

const restyleFunctions = composeRestyleFunctions<
  AppTheme,
  ColorProps<AppTheme> & BorderProps<AppTheme>
>([color, border]);

export const AppProfileImage = ({ uri, placeholder, background, borderRadius, size }: Props) => {
  const { otherSizes, colors } = useAppTheme();
  const props: any = useRestyle(restyleFunctions as any, {
    color: background,
    borderRadius
  });
  const style: any = props.style[0];
  const colorValue = style['color'];
  const borderRadiusValue = style['borderRadius'];

  return uri ? (
    <AppImage
      source={uri}
      placeholder={placeholder}
      style={{
        width: size ?? otherSizes.profileImage,
        height: size ?? otherSizes.profileImage,
        borderRadius: borderRadiusValue ?? otherSizes.profileImage / 2,
        backgroundColor: colorValue ?? colors.surfaceContainerHighest
      }}
    />
  ) : (
    <AppBox
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: size ?? otherSizes.profileImage,
        height: size ?? otherSizes.profileImage,
        borderRadius: borderRadiusValue ?? otherSizes.profileImage / 2,
        backgroundColor: colors.surfaceContainerHighest,
        overflow: 'hidden'
      }}
    />
  );
};
