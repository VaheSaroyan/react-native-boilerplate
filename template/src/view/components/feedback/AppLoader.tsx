import { ActivityIndicator, Platform } from 'react-native';

import {
  color,
  ColorProps,
  composeRestyleFunctions,
  createRestyleFunction,
  useRestyle,
  VariantProps
} from '@shopify/restyle';

import { AppTheme } from '~/view/theme';

type ThemedProps = ColorProps<AppTheme> & VariantProps<AppTheme, 'iconSizes', 'size'>;

export type Props = ThemedProps & {
  visible: boolean;
};

/**
 * map "size" prop to "width" StylProp using iconSizes from AppTheme
 */
const size = createRestyleFunction<AppTheme>({
  property: 'size',
  styleProperty: 'width',
  transform: v => {
    const key = v.value as keyof typeof v.theme.iconSizes;
    return v.theme.iconSizes[key];
  }
});

const restyleFunctions = composeRestyleFunctions<AppTheme, ThemedProps>([color, size as any]);

export const AppLoader = ({ visible, color = 'onPrimary', size = 's' }: Props) => {
  const props: any = useRestyle(restyleFunctions as any, {
    color,
    size
  });
  const style: any = props.style[0];
  const sizeValue = Platform.OS === 'android' ? style['width'] : size === 'l' ? 'large' : 'small';
  const colorValue = style['color'];

  return <ActivityIndicator animating={visible} color={colorValue} size={sizeValue} />;
};
