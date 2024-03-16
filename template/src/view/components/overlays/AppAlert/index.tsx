import { PropsWithChildren } from 'react';
import { Platform } from 'react-native';

import { Dialog, Portal } from 'react-native-paper';

import { AppButton } from '../../buttons';
import { AppBox } from '../../layout';

import { useKeyboard } from '~/utils';
import { useAppTheme } from '~/view/theme';

type Props = {
  visible: boolean;
  onDismiss?: () => void;
  onPositivePress?: () => void;
  positiveButtonTitle?: string;
  animStyle?: any;
};

export const AppAlert = ({
  visible,
  onDismiss,
  onPositivePress,
  positiveButtonTitle,
  children
}: PropsWithChildren<Props>) => {
  const { colors } = useAppTheme();
  const keyboard = useKeyboard();
  return (
    <Portal>
      <Dialog
        style={{
          backgroundColor: colors.surfaceContainer,
          marginBottom:
            Platform.OS === 'android' ? (keyboard.shown ? keyboard.height / 2 : 0) : undefined
        }}
        visible={visible}
        onDismiss={onDismiss}>
        <Dialog.Content>
          {children}
          <AppBox flexDirection="row" justifyContent="flex-end">
            <AppBox>
              <AppButton
                type="text"
                title="Cancel"
                onPress={onDismiss}
                size="small"
                color="primary"
              />
            </AppBox>
            <AppBox>
              <AppButton
                type="text"
                title={positiveButtonTitle ?? 'OK'}
                size="small"
                color="primary"
                onPress={onPositivePress}
              />
            </AppBox>
          </AppBox>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};
