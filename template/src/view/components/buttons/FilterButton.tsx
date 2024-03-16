import { StyleSheet, Text } from 'react-native';

import Animated from 'react-native-reanimated';

import { AppPressable, usePressableOverlay } from './AppPressable';
import { AppIcon, IconName } from '../images_and_icons';
import { AppBox } from '../layout';
import { AppText } from '../text';

import { useAppTheme } from '~/view/theme';

type FilterButtonProps = {
  title: string;
  leftIcon?: IconName;
  selected?: boolean;
  counter?: number;
  onPress?: () => void;
};

export const FilterButton = (props: FilterButtonProps) => {
  const { selected, counter, onPress, title, leftIcon } = props;
  const { buttonSizes, otherSizes, colors } = useAppTheme();

  const { onPressIn, onPressOut, layerStyle } = usePressableOverlay(onPress);

  return (
    <AppPressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <AppBox
        height={buttonSizes.s}
        paddingHorizontal="s"
        flexDirection="row"
        alignItems="center"
        columnGap="s"
        backgroundColor={selected ? 'secondary' : 'onSecondaryContainer'}
        borderColor={selected ? undefined : 'onSurfaceVariant'}
        borderRadius="m"
        borderWidth={selected ? 0 : 1}>
        {leftIcon && (
          <AppIcon
            name={selected ? 'check' : leftIcon}
            size="s"
            color={selected ? 'onSecondaryContainer' : 'onSurfaceVariant'}
          />
        )}
        <AppBox flexDirection="row" alignItems="center" columnGap="xs">
          <AppText
            variant="bodyMedium"
            color={selected ? 'onSecondaryContainer' : 'onSurfaceVariant'}>
            {title}
          </AppText>

          {counter && (
            <AppBox
              backgroundColor="onSecondaryContainer"
              justifyContent="center"
              alignItems="center"
              width={otherSizes.xs}
              height={otherSizes.xs}
              borderRadius="m">
              <Text
                style={{
                  textAlignVertical: 'center',
                  color: colors.onSurface,
                  fontSize: 9
                }}>
                {counter}
              </Text>
            </AppBox>
          )}
        </AppBox>
        <AppIcon
          name="chevron-down"
          size="s"
          color={selected ? 'onSecondaryContainer' : 'onSurfaceVariant'}
        />
      </AppBox>

      <Animated.View
        style={[
          { ...StyleSheet.absoluteFillObject, backgroundColor: colors.onPrimary },
          layerStyle
        ]}
      />
    </AppPressable>
  );
};
