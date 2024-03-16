import { useState } from 'react';
import { StyleSheet } from 'react-native';

import Animated from 'react-native-reanimated';

import { AppPressable, usePressableOverlay } from '../buttons/AppPressable';
import { AppBox } from '../layout/AppBox';
import { AppText } from '../text/AppText';

import { useAppTheme } from '~/view/theme';

type Props = {
  index?: number;
  labels: string[];
  onPress?: (index: number) => void;
};

export const SegmentedButton = ({ onPress, labels, index }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(index ?? 0);
  const { buttonSizes, colors } = useAppTheme();

  return (
    <AppBox
      overflow="hidden"
      flexDirection="row"
      borderWidth={1}
      borderColor="outline"
      borderRadius="m">
      {labels.map((l, i, arr) => {
        const handleOnPress = (index: number) => () => {
          onPress?.(index);
          setCurrentIndex(index);
        };

        return (
          <AppBox
            flexDirection="row"
            alignItems="center"
            key={l + i}
            flex={1}
            style={{
              backgroundColor: i === currentIndex ? colors.onSurface : 'transparent'
            }}>
            <Segment label={l} selected={i === currentIndex} onPress={handleOnPress(i)} />
            {i < arr.length - 1 && (
              <AppBox width={1} height={buttonSizes.s} backgroundColor="outline" />
            )}
          </AppBox>
        );
      })}
    </AppBox>
  );
};

type SegmentProps = {
  selected: boolean;
  label: string;
  onPress?: () => void;
};

const Segment = ({ selected, label, onPress }: SegmentProps) => {
  const { colors, borderRadii, buttonSizes } = useAppTheme();
  const { onPressIn, onPressOut, layerStyle } = usePressableOverlay(onPress);

  return (
    <AppBox flex={1}>
      <AppPressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
        <AppBox alignItems="center" justifyContent="center" height={buttonSizes.s}>
          <AppText variant={'bodyMedium'} color={selected ? 'surface' : 'onSurface'}>
            {label}
          </AppText>
        </AppBox>
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              borderRadius: borderRadii.s,
              backgroundColor: colors.onPrimary
            },
            layerStyle
          ]}
        />
      </AppPressable>
    </AppBox>
  );
};
