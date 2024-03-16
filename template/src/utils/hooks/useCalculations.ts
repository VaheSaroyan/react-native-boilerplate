import { Dimensions } from 'react-native';

import { useAppTheme } from '~/view/theme';

const WIDTH = Dimensions.get('window').width;

export const useCalculations = (dataLength: number, aspectRatio = 0.9) => {
  const { spacing } = useAppTheme();
  const cardWidth = WIDTH - spacing.m * 2 - (dataLength > 1 ? spacing.s : 0);

  const cardHeight = cardWidth / aspectRatio;
  const offsets = () => {
    const arr = [];
    for (let i = 0; i < dataLength; i++) {
      if (i === 0) {
        arr.push(i);
      } else {
        arr.push(cardWidth * i + (spacing.s / 2) * i + (spacing.s / 2) * (i - 1));
      }
    }

    return arr;
  };

  return {
    offsets: offsets(),
    cardWidth,
    cardHeight
  };
};
