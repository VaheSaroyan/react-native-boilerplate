import React, { useCallback, useState } from 'react';
import { Platform, useWindowDimensions } from 'react-native';

import { ColorProps } from '@shopify/restyle';
import {
  NativeSyntheticEvent,
  TextLayoutEventData
} from 'react-native/Libraries/Types/CoreEventTypes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast, { ToastConfig, ToastConfigParams } from 'react-native-toast-message';

import { AppBox } from '../layout';
import { AppText } from '../text';

import { AppButton } from '~/view/components/buttons';
import { AppIcon, IconName } from '~/view/components/images_and_icons';
import { AppTheme, useAppTheme } from '~/view/theme';

type AppSnackbarType = 'success' | 'error' | 'info';

type BaseSnackbarProps = {
  actionBtnTitle?: string;
  onActionPress?: () => void;
  onHide?: () => void;
};

// TODO: AppToast will be replaced by this component
export class AppSnackbar {
  static show(t: AppSnackbarType, text: string | undefined, props?: BaseSnackbarProps) {
    Toast.show({
      type: mapType(t),
      text1: text,
      autoHide: true,
      visibilityTime: props?.onActionPress ? 5000 : 3000,
      position: 'top',
      topOffset: 0,
      props
    });
  }

  static hide() {
    Toast.hide();
  }
}

const mapType = (t: AppSnackbarType) => {
  switch (t) {
    case 'success':
      return '_success';
    case 'error':
      return '_error';
    case 'info':
      return 'info';
  }
};

export const SNACKBAR_CONFIG: ToastConfig = {
  // workaround of
  // https://github.com/calintamas/react-native-toast-message/issues/428
  success: () => null,
  error: () => null,
  info: props => <InfoSnackbar {...props} />,
  _success: props => <SuccessSnackbar {...props} />,
  _error: props => <ErrorSnackbar {...props} />
};

const SuccessSnackbar = (props: ToastConfigParams<BaseSnackbarProps>) => {
  return <SnackbarTemplate {...props} color="primary" icon="check-circle" />;
};

const ErrorSnackbar = (props: ToastConfigParams<BaseSnackbarProps>) => {
  return <SnackbarTemplate {...props} color="error" icon="info-filled" />;
};

const InfoSnackbar = (props: ToastConfigParams<BaseSnackbarProps>) => {
  return (
    <SnackbarTemplate
      {...props}
      color="onSurfaceVariant"
      icon="info-filled"
      textColor="onSurface"
    />
  );
};

const SnackbarTemplate = ({
  text1,
  props,
  icon,
  color,
  textColor
}: ToastConfigParams<BaseSnackbarProps> & {
  icon: IconName;
  color: ColorProps<AppTheme>['color'];
  textColor?: ColorProps<AppTheme>['color'];
}) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { spacing } = useAppTheme();

  const [lines, setLines] = useState(0);

  const onTextLayout = useCallback((e: NativeSyntheticEvent<TextLayoutEventData>) => {
    setLines(e.nativeEvent.lines.length);
  }, []);

  const centered = !props.onActionPress && lines <= 1;

  return (
    <AppBox
      width={width - spacing.m * 2}
      marginHorizontal="m"
      paddingStart="m"
      borderRadius="xs"
      overflow="hidden"
      paddingEnd="xs"
      backgroundColor="surfaceContainerHigh"
      style={{
        ...containerStyle(insets.top)
      }}>
      <AppBox width={8} height="100%" backgroundColor={color} position="absolute" left={0} />
      <AppBox
        flex={1}
        flexDirection="row"
        columnGap="s"
        paddingEnd="s"
        paddingVertical="m"
        alignItems={centered ? 'center' : undefined}>
        <AppBox alignSelf={centered ? undefined : 'flex-start'}>
          <AppIcon name={icon} size="s" color={color} />
        </AppBox>
        <AppText style={{ flex: 1 }} color={textColor ?? color} onTextLayout={onTextLayout}>
          {text1}
        </AppText>
      </AppBox>
      {props.onActionPress && (
        <AppBox
          alignSelf="flex-end"
          flexDirection="row"
          alignItems="flex-end"
          paddingHorizontal="s">
          <AppButton
            size="small"
            type="text"
            color="primary"
            title={props.actionBtnTitle ?? ''}
            onPress={props.onActionPress}
          />
        </AppBox>
      )}
    </AppBox>
  );
};

const containerStyle = (top: number) => ({
  marginTop: Platform.select({
    android: top ? top + 4 : 8,
    ios: top ? top + 4 : 8
  })
});
