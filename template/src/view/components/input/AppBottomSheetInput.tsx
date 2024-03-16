import { useCallback } from 'react';

import { useBottomSheetInternal } from '@gorhom/bottom-sheet';

import { AppInput, AppInputProps } from './AppInput';

import { useAppTheme } from '~/view/theme';

export const AppBottomSheetInput = (props: AppInputProps) => {
  const { colors } = useAppTheme();
  const { shouldHandleKeyboardEvents } = useBottomSheetInternal();

  const handleOnFocus = useCallback(() => {
    shouldHandleKeyboardEvents.value = true;
  }, [shouldHandleKeyboardEvents]);

  const handleOnBlur = useCallback(() => {
    shouldHandleKeyboardEvents.value = false;
  }, [shouldHandleKeyboardEvents]);

  return (
    <AppInput
      labelBgColor={colors.surfaceContainerLow}
      {...props}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    />
  );
};
