import { useEffect } from 'react';

import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import { AppBox } from '../layout/AppBox';

import { useAppTheme } from '~/view/theme';

type Props = {
  currentIndex: number;
  length: number;
  animatable?: boolean;
  onAnimEnd?: () => void;
  animDuration?: number;
};

const ANIM_DURATION = 7200;

export const AppStepper = ({
  length,
  currentIndex,
  animatable = true,
  onAnimEnd,
  animDuration = ANIM_DURATION
}: Props) => {
  const { otherSizes } = useAppTheme();
  const arr = Array.from({ length }, (_, i) => i);

  const translateX = useSharedValue(animatable ? -otherSizes.s : 0);

  useEffect(() => {
    translateX.value = animatable ? -otherSizes.s : 0;

    if (animatable) {
      translateX.value = withTiming(0, { duration: animDuration }, finished => {
        if (onAnimEnd && finished) {
          runOnJS(onAnimEnd)();
        }
      });
    }
  }, [currentIndex, animatable]);

  return (
    <AppBox flexDirection="row" columnGap="xs" alignItems="center" justifyContent="center">
      {arr.map((_, i) => {
        return (
          <AppBox
            key={i}
            width={otherSizes.s}
            height={otherSizes.xxxs}
            borderRadius="xs"
            overflow="hidden"
            backgroundColor="surfaceContainerHighest">
            <Dash translateX={translateX} index={i} currentIndex={currentIndex} />
          </AppBox>
        );
      })}
    </AppBox>
  );
};

type DashProps = {
  translateX: SharedValue<number>;
  index: number;
  currentIndex: number;
};

const Dash = ({ translateX, index, currentIndex }: DashProps) => {
  const { colors, borderRadii, otherSizes } = useAppTheme();

  const style = useAnimatedStyle(
    () => ({
      width: otherSizes.s,
      height: otherSizes.xxxs,
      borderRadius: borderRadii.xs,
      backgroundColor: colors.primary,
      transform: [
        {
          translateX:
            index === currentIndex ? translateX.value : index < currentIndex ? 0 : -otherSizes.s
        }
      ] as any
    }),
    [translateX, currentIndex, index]
  );

  return <Animated.View style={style} />;
};
