import { forwardRef, useImperativeHandle, useRef } from 'react';

import { BaseSheet, BaseSheetProps } from './BaseSheet';

import { AppBottomSheet, AppBottomSheetRefHanldes } from './index';

type AppBaseBottomSheetProps = BaseSheetProps & {
  onDismiss?: () => void;
  androidInputMode?: 'adjustPan' | 'adjustResize';
};

export const AppBaseBottomSheet = forwardRef<AppBottomSheetRefHanldes, AppBaseBottomSheetProps>(
  (props, ref) => {
    const bottomSheetRef = useRef<AppBottomSheetRefHanldes>(null);

    useImperativeHandle(ref, () => ({
      show: () => {
        bottomSheetRef.current?.show();
      },
      hide: () => {
        bottomSheetRef.current?.hide();
      }
    }));

    const handlePositivePress = () => {
      bottomSheetRef.current?.hide();
      props.onPositivePress?.();
    };

    const handleNegativePress = () => {
      bottomSheetRef.current?.hide();
      props.onNegativePress?.();
    };

    return (
      <AppBottomSheet
        ref={bottomSheetRef}
        onDismiss={props.onDismiss}
        androidInputMode={props.androidInputMode}>
        <BaseSheet
          {...props}
          onNegativePress={handleNegativePress}
          onPositivePress={handlePositivePress}
        />
      </AppBottomSheet>
    );
  }
);
