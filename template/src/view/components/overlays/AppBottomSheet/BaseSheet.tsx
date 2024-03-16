import { ReactNode } from 'react';

import { ColorProps } from '@shopify/restyle';
import isUndefined from 'lodash/isUndefined';

import { AppIcon, IconName } from '../..';
import { AppButton } from '../../buttons/AppButton';
import { AppBox } from '../../layout/AppBox';
import { AppText } from '../../text/AppText';

import { AppTheme, useAppTheme } from '~/view/theme';

export type BaseSheetProps = {
  title: string;
  subTitle?: string;
  subTitleColor?: ColorProps<AppTheme>['color'];
  icon?: IconName;
  subContent?: ReactNode;
  positiveButtonTitle?: string;
  negativeButtonTitle?: string;
  onPositivePress?: () => void;
  onNegativePress?: () => void;
  positiveButton?: ReactNode;
  negativeButton?: ReactNode;
};

export const BaseSheet = ({
  positiveButton,
  positiveButtonTitle,
  negativeButton,
  negativeButtonTitle,
  onNegativePress,
  onPositivePress,
  title,
  subTitle,
  subContent,
  subTitleColor = 'onSurface',
  icon
}: BaseSheetProps) => {
  const { spacing } = useAppTheme();
  const showPositive = !isUndefined(positiveButton) || !isUndefined(positiveButtonTitle);

  return (
    <AppBox p="m">
      <AppBox rowGap="s">
        <AppText variant="titleLarge">{title}</AppText>
        <AppBox flexDirection="row" alignItems="center" columnGap="s">
          {icon && <AppIcon name={icon} size="s" color={subTitleColor} />}
          {subTitle && (
            <AppBox flex={1}>
              <AppText variant="bodyMedium" color={subTitleColor}>
                {subTitle}
              </AppText>
            </AppBox>
          )}
        </AppBox>
      </AppBox>

      <AppBox minHeight={spacing.l}>{subContent}</AppBox>

      <AppBox rowGap="s">
        {showPositive &&
          (positiveButton
            ? positiveButton
            : positiveButtonTitle && (
                <AppBox flex={1}>
                  <AppButton type="tonal" title={positiveButtonTitle} onPress={onPositivePress} />
                </AppBox>
              ))}

        {negativeButton ? (
          negativeButton
        ) : (
          <AppBox flex={1}>
            <AppButton
              title={negativeButtonTitle ?? 'Cancel'}
              onPress={onNegativePress}
              type="outlined"
            />
          </AppBox>
        )}
      </AppBox>
    </AppBox>
  );
};
