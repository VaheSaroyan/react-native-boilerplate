import { forwardRef, ReactElement, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  ColorValue,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps
} from 'react-native';

import isUndefined from 'lodash/isUndefined';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import TextInputMask from 'react-native-text-input-mask';

import { IconButton } from '../buttons/IconButton';
import { AppIcon, IconName } from '../images_and_icons/icon/AppIcon';
import { AppBox } from '../layout/AppBox';
import { AppText } from '../text/AppText';

import { useAppTheme } from '~/view/theme';

export type AppInputRefHanldes = {
  clear: () => void;
  setText: (t: string) => void;
};

export interface AppInputProps
  extends Omit<TextInputProps, 'style' | 'testID' | 'secureTextEntry'> {
  testID?: string;
  error?: string;
  tip?: string;
  label?: string;
  labelBgColor?: ColorValue;
  withSecureText?: boolean;
  disabled?: boolean;
  withClear?: boolean;
  leftIcon?: IconName;
  leftElement?: () => ReactElement;
  rightElement?: () => ReactElement;
  mask?: string;
  fixedLabel?: string;
  errorHeight?: number;
}

export const AppInput = forwardRef<AppInputRefHanldes, AppInputProps>(
  (props: AppInputProps, ref) => {
    const {
      testID,
      label,
      error,
      tip,
      disabled,
      leftIcon,
      withClear,
      withSecureText,
      labelBgColor,
      leftElement,
      rightElement,
      mask,
      fixedLabel,
      errorHeight
    } = props;
    const { colors, inputSizes, otherSizes, colorAlpha, spacing, textVariants, opacity } =
      useAppTheme();

    const [focused, setFocused] = useState(false);
    const [secureTextVisible, setSecureTextVisible] = useState(false);
    const currentValue = useRef<string>(props.defaultValue ?? '');
    const textInputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
      clear: () => {
        textInputRef.current?.clear();
      },
      setText: (text: string) => {
        textInputRef.current?.setNativeProps({
          text
        });
      }
    }));

    const showLabel =
      !!props.value || !!props.defaultValue || !!currentValue.current || focused || !!fixedLabel;

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      props.onBlur?.(e);
    };

    const handleTextChange = (text: string) => {
      currentValue.current = text;
      props.onChangeText?.(text);
    };

    const handleMaskedTextChange = (formatted: string, extracted?: string) => {
      currentValue.current = extracted ?? '';
      props.onChangeText?.(extracted ?? '');
    };

    const toogleSecureText = () => {
      setSecureTextVisible(s => !s);
    };

    const onTextClear = () => {
      textInputRef.current?.clear();
      handleTextChange('');
    };

    const labelAnimStyle = useAnimatedStyle(() => ({
      opacity: withTiming(showLabel ? 1 : 0, {
        duration: 150
      })
    }));

    const initiallabelAnimStyle = useAnimatedStyle(() => ({
      opacity: withTiming(showLabel ? 0 : 1, {
        duration: 150
      })
    }));

    const borderColor = () => {
      if (error) {
        return colors.error;
      }

      if (focused) {
        return colors.primary;
      }
      return colors.outline;
    };

    const paddingRight = () => {
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      if ((withClear && focused) || withSecureText) {
        return 's';
      }

      if (error) {
        return 'sm';
      }

      return 'm';
    };

    const renderLeft = () => {
      if (!isUndefined(leftElement)) {
        return leftElement();
      }
      return leftIcon && <AppIcon name={leftIcon} color={'outline'} />;
    };

    const renderRight = () => {
      if (!isUndefined(rightElement)) {
        return rightElement();
      }

      if (withClear && focused) {
        return <IconButton icon="circle-close" onPress={onTextClear} />;
      }

      if (withSecureText) {
        return (
          <IconButton
            icon={secureTextVisible ? 'eye-hidden' : 'eye-show'}
            onPress={toogleSecureText}
          />
        );
      }

      if (error) {
        return <AppIcon name="info-filled" color="error" />;
      }
    };

    /**
     * The ugly workaround for forcing <TextInputMask /> to be re-mounted on every
     * mask prop change. We need it as entered value can't be cleared
     * and mask can't be aplied, when it changes
     */
    const [showMask, setShowMask] = useState(false);

    useEffect(() => {
      if (mask) {
        setShowMask(false);
        setTimeout(() => {
          setShowMask(true);
        }, 200);
        handleMaskedTextChange('', '');
      }
    }, [mask]);

    return (
      <AppBox
        pt="s"
        style={{
          opacity: disabled ? opacity.high : undefined
        }}>
        <AppBox
          flexDirection="row"
          borderRadius="m"
          alignItems="center"
          pl={leftIcon ? 'sm' : 'm'}
          pr={paddingRight()}
          paddingVertical={props.multiline ? 's' : 'zero'}
          columnGap="m"
          style={{
            height: props.multiline ? 128 : inputSizes.m,
            borderWidth: otherSizes.xxxxs,
            borderColor: borderColor()
          }}>
          {renderLeft()}
          <AppBox flex={1}>
            {mask ? (
              showMask ? (
                <TextInputMask
                  ref={textInputRef}
                  style={{
                    ...textVariants.bodyLarge,
                    color: colors.onSurface,
                    lineHeight: Platform.OS === 'android' ? 24 : undefined,
                    flex: 1,
                    height: inputSizes.m
                  }}
                  selectionColor={
                    Platform.OS === 'android'
                      ? `${colors.onSurface}${colorAlpha[38]}`
                      : colors.onSurface
                  }
                  cursorColor={colors.onSurface}
                  placeholderTextColor={colors.onSurfaceVariant}
                  keyboardType="phone-pad"
                  inputMode="tel"
                  returnKeyType="done"
                  {...props}
                  testID={testID}
                  accessibilityLabel={testID}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  editable={!disabled ?? props.editable}
                  mask={mask}
                  onChangeText={handleMaskedTextChange}
                  autocomplete={false}
                />
              ) : null
            ) : (
              <TextInput
                ref={textInputRef}
                style={{
                  ...textVariants.bodyLarge,
                  lineHeight:
                    Platform.OS === 'android' ? textVariants.bodyLarge.lineHeight : undefined,
                  color: colors.onSurface,
                  flex: 1,
                  height: props.multiline ? 128 : inputSizes.m
                }}
                selectionColor={
                  Platform.OS === 'android'
                    ? `${colors.onSurface}${colorAlpha[38]}`
                    : colors.onSurface
                }
                cursorColor={colors.onSurface}
                placeholderTextColor={colors.onSurfaceVariant}
                textAlignVertical={props.multiline ? 'top' : undefined}
                {...props}
                testID={testID}
                accessibilityLabel={testID}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleTextChange}
                secureTextEntry={withSecureText && !secureTextVisible}
                editable={!disabled ?? props.editable}
              />
            )}

            {label && (
              <Animated.View
                style={[
                  initiallabelAnimStyle,
                  {
                    ...StyleSheet.absoluteFillObject,
                    top: spacing.s,
                    height: otherSizes.l,
                    justifyContent: 'center',
                    backgroundColor: labelBgColor ?? colors.surface
                  }
                ]}
                pointerEvents={'none'}>
                <AppText
                  variant="bodyLarge"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  color="onSurfaceVariant">
                  {label}
                </AppText>
              </Animated.View>
            )}
          </AppBox>

          {renderRight()}
        </AppBox>

        <AppBox
          height={isUndefined(errorHeight) ? otherSizes.xs : errorHeight}
          paddingHorizontal="m"
          justifyContent="flex-start">
          <AppText
            variant="bodySmall"
            color={error ? 'error' : 'outline'}
            numberOfLines={2}
            ellipsizeMode="tail">
            {error ? error : tip ? tip : ''}
          </AppText>
        </AppBox>

        {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
        {(label || fixedLabel) && (
          <Animated.View
            style={[
              labelAnimStyle,
              { position: 'absolute', top: 0, left: spacing.m - spacing.xs }
            ]}>
            <AppBox
              paddingHorizontal="xs"
              style={{
                backgroundColor: labelBgColor ?? colors.surface,
                borderRadius: spacing.xs
              }}>
              <AppText
                variant="bodyMedium"
                numberOfLines={1}
                ellipsizeMode="tail"
                color={error ? 'error' : undefined}>
                {label ?? fixedLabel}
              </AppText>
            </AppBox>
          </Animated.View>
        )}
      </AppBox>
    );
  }
);
