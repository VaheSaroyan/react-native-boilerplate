import { forwardRef, PropsWithChildren, useImperativeHandle, useRef } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView
} from 'react-native';

import { useMount } from '~/utils';

export type AppPagerRefHanldes = {
  scrollTo: (index: number) => void;
};

type Props = {
  initialPageIndex: number;
  onPageSelected: (index: number) => void;
};

export const AppPager = forwardRef<AppPagerRefHanldes, PropsWithChildren<Props>>(
  ({ initialPageIndex, onPageSelected, children }, ref) => {
    const scrollViewRef = useRef<ScrollView>(null);

    useImperativeHandle(ref, () => ({
      scrollTo: index => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: index * W, animated: true });
          if (Platform.OS === 'android') {
            onPageSelected(index);
          }
        }
      }
    }));

    useMount(() => {
      onPageSelected(initialPageIndex);
    });

    const handleonScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffset = event.nativeEvent.contentOffset.x;

      if (currentOffset % W === 0) {
        const i = currentOffset / W;
        onPageSelected(i);
      }
    };

    return (
      <ScrollView
        ref={scrollViewRef}
        removeClippedSubviews={true}
        contentOffset={{ x: initialPageIndex * W, y: 0 }}
        onMomentumScrollEnd={handleonScroll}
        scrollEventThrottle={50}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        keyboardShouldPersistTaps="always">
        {children}
      </ScrollView>
    );
  }
);

const W = Dimensions.get('screen').width;
