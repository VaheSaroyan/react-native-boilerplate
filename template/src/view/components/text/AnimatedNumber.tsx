import { useEffect, useMemo } from 'react';

import { useFont } from '@shopify/react-native-skia';
import { VariantProps } from '@shopify/restyle';
import isNaN from 'lodash/isNaN';
import toNumber from 'lodash/toNumber';
import Animated, {
  Easing,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import { AppBox } from '../layout/AppBox';

import { AppTheme, useAppTheme } from '~/view/theme';
import { PoppinsSemiBoldFile } from '~/view/theme/fonts.ts';

type Props = VariantProps<AppTheme, 'textVariants'> & {
  number: string;
  label?: string;
};

export const AnimatedNumber = ({ number, variant = 'displayLarge', label }: Props) => {
  const { colors, textVariants } = useAppTheme();

  const anim = useSharedValue<number>(0);

  useEffect(() => {
    anim.value = 0;
    anim.value = withTiming(1, { duration: 5000 });
  }, [number]);

  const numberArr = useMemo(() => {
    const arr = Array.from(number);
    const mapped = arr.map(sn => {
      const num = toNumber(sn);
      return isNaN(num) ? sn : num;
    });
    return mapped;
  }, [number]);

  const labelStyle = useAnimatedStyle(
    () => ({
      fontSize: textVariants.bodyMedium.fontSize,
      lineHeight: textVariants.bodyMedium.lineHeight,
      fontFamily: textVariants.bodyMedium.fontFamily,
      textTransform: 'uppercase',
      color: interpolateColor(anim.value, [0.8, 1], [colors.secondary, colors.onSurface])
    }),
    []
  );

  return (
    <AppBox flexDirection={'row'} alignItems="center">
      <AppBox overflow="hidden" flexDirection="row" style={{ columnGap: 1 }}>
        {numberArr.map((n, i) => (
          <AnimatedChunk key={n + i.toString()} anim={anim} num={n} variant={variant} />
        ))}
      </AppBox>

      <Animated.Text style={labelStyle} allowFontScaling={false}>
        {label}
      </Animated.Text>
    </AppBox>
  );
};

type AnimatedChunkProps = VariantProps<AppTheme, 'textVariants'> & {
  anim: SharedValue<number>; // [0, 1]
  num: number | string; // [0, 9]
};

const NUMBERS = [...Array(10).keys()];

const AnimatedChunk = ({ anim, num, variant = 'displaySmall' }: AnimatedChunkProps) => {
  const { colors, textVariants } = useAppTheme();

  const textVariant = textVariants[variant];
  const font = useFont(PoppinsSemiBoldFile, textVariant.fontSize);
  const fontW = font?.getTextWidth(num.toString());

  const targetTranslateY = -(textVariant.lineHeight * (typeof num === 'number' ? num : 0));
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(targetTranslateY, { duration: 1000, easing: Easing.ease });
  }, [num]);

  const textStyle = useAnimatedStyle(
    () => ({
      fontSize: textVariant.fontSize,
      lineHeight: textVariant.lineHeight,
      fontFamily: textVariant.fontFamily,
      textTransform: 'uppercase',
      color: interpolateColor(anim.value, [0.8, 1], [colors.secondary, colors.onSurface])
    }),
    [textVariant]
  );

  const viewStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }] as any
  }));

  return typeof num === 'number' ? (
    <Animated.View style={[{ width: fontW, height: textVariant.lineHeight }, viewStyle]}>
      {NUMBERS.map((n, i) => (
        <Animated.Text key={n + i.toString()} style={textStyle} allowFontScaling={false}>
          {n}
        </Animated.Text>
      ))}
    </Animated.View>
  ) : (
    <Animated.Text style={textStyle} allowFontScaling={false}>
      {num}
    </Animated.Text>
  );
};
