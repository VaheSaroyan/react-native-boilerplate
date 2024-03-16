import { FC, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';

import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';

import { AppPressable } from '../../buttons';
import { AppIcon } from '../../images_and_icons';
import { AppBox } from '../../layout';
import { AppText } from '../../text';

import { useAppTheme } from '~/view/theme';

type Props = {
  title?: string;
  tipTitle?: string;
  message: string;
};

export const AppTip: FC<Props> = ({ title, message, tipTitle }) => {
  const { buttonSizes } = useAppTheme();

  const [state, setState] = useState({ show: false, translateY: 0 });

  const handlePress = (e: GestureResponderEvent) => {
    const finalTranslateY = e.nativeEvent.pageY - e.nativeEvent.locationY + buttonSizes.s;

    setState(prev => ({
      show: !prev.show,
      translateY: finalTranslateY
    }));
  };

  const onDismiss = () => {
    setState({
      show: false,
      translateY: 0
    });
  };

  return (
    <>
      <AppPressable onPress={handlePress}>
        <AppBox flexDirection="row" minHeight={buttonSizes.s} columnGap="xs" alignItems="center">
          <AppIcon name="info" size="s" color="onSurfaceVariant" />
          {title && (
            <AppText variant="bodySmall" color="onSurfaceVariant">
              {title}
            </AppText>
          )}
        </AppBox>
      </AppPressable>

      <Modal visible={state.show} transparent>
        <AppPressable
          onPress={onDismiss}
          style={{
            ...StyleSheet.absoluteFillObject,
            zIndex: 9999
          }}
        />

        <AppBox paddingHorizontal="l" style={{ transform: [{ translateY: state.translateY }] }}>
          <AppBox backgroundColor="surfaceContainer" p="m" borderRadius="m" width="100%" rowGap="s">
            {tipTitle && <AppText>{tipTitle}</AppText>}
            <AppText variant="bodySmall" color="onSurfaceVariant">
              {message}
            </AppText>
          </AppBox>
        </AppBox>
      </Modal>
    </>
  );
};
