import { useMemo } from 'react';
import { TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';

import { BottomSheetBackdropProps, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

type Props = BottomSheetBackdropProps & { height: number };

export const BackDrop = ({ animatedPosition, style, height }: Props) => {
  const dims = useWindowDimensions();
  const bottomSheet = useBottomSheetModal();
  const containerAnimatedStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(
        animatedPosition.value,
        [dims.height, dims.height - height],
        [0, 0.8],
        Extrapolate.CLAMP
      )
    }),
    [animatedPosition.value]
  );

  const containerStyle = useMemo(
    () => [
      style,
      {
        // backgroundColor: "black"
      },
      containerAnimatedStyle
    ],
    [style, containerAnimatedStyle]
  );

  const handlePress = () => {
    bottomSheet.dismiss();
  };

  return (
    <Animated.View style={containerStyle}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};
