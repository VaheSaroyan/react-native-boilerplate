import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints
} from '@gorhom/bottom-sheet';
import { useReducedMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppBox } from '../../layout/AppBox';

import { useAppTheme } from '~/view/theme';

export type AppBottomSheetRefHanldes = {
  show: () => void;
  hide: () => void;
};

type SnapMode = 'full-height' | 'content-height';

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  onDismiss?: () => void;
  snapMode?: SnapMode;
  handleBackground?: any;
  androidInputMode?: 'adjustPan' | 'adjustResize';
};

export const AppBottomSheet = forwardRef<AppBottomSheetRefHanldes, Props>(
  (
    {
      snapMode = 'content-height',
      children,
      onDismiss,
      handleBackground,
      androidInputMode = 'adjustResize'
    },
    ref
  ) => {
    const insets = useSafeAreaInsets();
    const { spacing, otherSizes, colors } = useAppTheme();
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    // https://github.com/gorhom/react-native-bottom-sheet/issues/1560
    const reducedMotion = useReducedMotion();

    const initialSnapPoints = useMemo(
      () => (snapMode === 'content-height' ? ['CONTENT_HEIGHT'] : ['100%']),
      [snapMode]
    );

    const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
      useBottomSheetDynamicSnapPoints(initialSnapPoints);

    useImperativeHandle(ref, () => ({
      show: () => {
        bottomSheetModalRef.current?.present();
      },
      hide: () => {
        bottomSheetModalRef.current?.dismiss();
      }
    }));

    const renderBackDrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.8} />
      ),
      []
    );

    const renderHandle = useCallback(
      () => (
        <AppBox
          backgroundColor={handleBackground ?? 'surfaceContainerLow'}
          borderTopLeftRadius="xxl"
          borderTopRightRadius="xxl"
          alignItems="center"
          justifyContent="center"
          style={{ height: otherSizes.m + otherSizes.xxxs }}>
          <AppBox borderRadius="xs" bg="outline" height={otherSizes.xxxs} width={otherSizes.m} />
        </AppBox>
      ),
      []
    );

    const bottomInset = insets.bottom ? insets.bottom : spacing.s;
    const topInset = insets.top ? insets.top : spacing.s;

    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        animateOnMount={!reducedMotion}
        index={0}
        snapPoints={(snapMode === 'content-height' ? animatedSnapPoints : ['100%']) as any}
        handleHeight={snapMode === 'content-height' ? animatedHandleHeight : undefined}
        contentHeight={snapMode === 'content-height' ? animatedContentHeight : undefined}
        keyboardBlurBehavior="restore"
        handleComponent={renderHandle}
        backdropComponent={renderBackDrop}
        android_keyboardInputMode={androidInputMode}
        enableDynamicSizing
        onDismiss={onDismiss}
        topInset={topInset}
        backgroundStyle={{
          backgroundColor: colors.surfaceContainerLow
        }}
        containerStyle={{
          flex: snapMode === 'full-height' ? 1 : 0
        }}>
        <AppBox
          flex={snapMode === 'full-height' ? 1 : undefined}
          backgroundColor="surfaceContainerLow"
          style={{
            paddingBottom: bottomInset
          }}
          onLayout={handleContentLayout}>
          {children}
        </AppBox>
      </BottomSheetModal>
    );
  }
);
