import { useRef } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
  AnimatedButton,
  AnimatedNumber,
  AppBadge,
  AppBaseBottomSheet,
  AppBottomSheetRefHanldes,
  AppBox,
  AppButton,
  AppChip,
  AppDivider,
  AppLoader,
  AppPressable,
  AppScreen,
  AppSnackbar,
  AppStepper,
  AppSvgImage,
  AppText,
  FilterButton,
  IconButton,
  LabelValue,
  SectionLabel,
  SegmentedButton
} from '~/view/components';
import { AppImage } from '~/view/components/images_and_icons/AppImage.tsx';
import { AppProfileImage } from '~/view/components/images_and_icons/AppProfileImage.tsx';
import { AppBottomSheetInput, AppInput, AppSearchInput } from '~/view/components/input';

export const HomeScreen = () => {
  const confirmPasswordSheetRef = useRef<AppBottomSheetRefHanldes>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppScreen scrollable rowGap="s" withBottom={false}>
        <AppDivider />
        <AppText variant="bodySmall">AnimatedNumber</AppText>
        <AppBox flexDirection="row">
          <AnimatedNumber number="912387129" />
        </AppBox>

        <AppDivider />
        <AppText variant="displayLarge">display Large</AppText>
        <AppText variant="displayMedium">display Medium</AppText>
        <AppText variant="displaySmall">display Small</AppText>
        <AppDivider />
        <AppText variant="headlineLarge">headline Large</AppText>
        <AppText variant="headlineMedium">headline Medium</AppText>
        <AppText variant="headlineSmall">headline Small</AppText>
        <AppDivider />
        <AppText variant="titleLarge">title Large</AppText>
        <AppText variant="titleMedium">title Medium</AppText>
        <AppText variant="titleSmall">title Small</AppText>
        <AppDivider />
        <AppText variant="bodyLarge">body Large</AppText>
        <AppText variant="bodyMedium">body Medium</AppText>
        <AppText variant="bodySmall">body Small</AppText>
        <AppDivider />
        <AppText variant="bodySmall">AnimatedButton</AppText>
        <AnimatedButton title={'Hello Worlds'} icon="heart" size="large" />
        <AppDivider />
        <AppText variant="bodySmall">AppButton</AppText>
        <AppButton title={'Hello World'} icon="heart" size="large" />
        <AppDivider />
        <AppText variant="bodySmall">AppPressable</AppText>
        <AppPressable>
          <AppText variant="bodySmall">AppPressable</AppText>
        </AppPressable>
        <AppDivider />
        <AppText variant="bodySmall">FilterButton</AppText>
        <FilterButton title="Filter" counter={3}></FilterButton>
        <AppDivider />
        <AppText variant="bodySmall">IconButton</AppText>
        <IconButton icon="heart" />
        <AppDivider />
        <AppText variant="bodySmall">SegmentedButton</AppText>
        <SegmentedButton labels={['segment1', 'segment2', 'segment3']} />
        <AppDivider />
        <AppText variant="bodySmall">AppBadge</AppText>
        <AppBox width={10}>
          <AppBadge text="1" />
        </AppBox>
        <AppDivider />
        <AppText variant="bodySmall">AppBadge</AppText>
        <AppLoader visible />
        <AppDivider />
        <AppText variant="bodySmall">AppSnackbar</AppText>
        <AppBox flexDirection="row" columnGap="m">
          <IconButton
            icon="check-circle"
            onPress={() => {
              AppSnackbar.show('success', 'Success!');
            }}
          />
          <IconButton
            icon="info-filled"
            color="primary"
            onPress={() => {
              AppSnackbar.show('info', 'Info!');
            }}
          />
          <IconButton
            icon="info-filled"
            color="error"
            onPress={() => {
              AppSnackbar.show('error', 'Error!');
            }}
          />
        </AppBox>
        <AppDivider />
        <AppText variant="bodySmall">AppStepper</AppText>
        <AppStepper currentIndex={1} length={3} animatable={false} />
        <AppDivider />
        <AppText variant="bodySmall">AppImage</AppText>
        <AppImage
          source={{
            uri: 'https://loremflickr.com/100/100/dog'
          }}
          width={100}
          height={100}
        />
        <AppDivider />
        <AppText variant="bodySmall">AppProfileImage</AppText>
        <AppProfileImage uri={{ uri: 'https://loremflickr.com/100/100/dog' }} />
        <AppDivider />
        <AppText variant="bodySmall">AppSvgImage</AppText>
        <AppSvgImage name="facebook" size={100} />
        <AppDivider />
        <AppText variant="bodySmall">AppChip</AppText>
        <AppBox flexDirection="row" columnGap="s">
          <AppChip text="chip1" />
          <AppChip text="chip2" />
          <AppChip text="chip3" />
        </AppBox>
        <AppDivider />
        <AppText variant="bodySmall">LabelValue</AppText>
        <LabelValue label="Lorem" value="Picksum" />
        <AppDivider />
        <AppText variant="bodySmall">SectionLabel</AppText>
        <SectionLabel label="Lorem" badgeText="2" />
        <AppDivider />
        <AppText variant="bodySmall">AppBottomSheetInput</AppText>
        <AppButton
          title="Open Bottom Sheet"
          size="small"
          onPress={() => {
            confirmPasswordSheetRef.current?.show();
          }}
        />
        <AppBaseBottomSheet
          ref={confirmPasswordSheetRef}
          title="Make a change?"
          subTitle="We need to be sure this is you. Please enter your password first."
          subContent={
            <AppBox pb="s" pt="m">
              <AppBottomSheetInput
                onChangeText={console.log}
                label="Password"
                withSecureText
                autoCorrect={false}
                autoCapitalize="none"
              />
            </AppBox>
          }
          androidInputMode="adjustPan"
          positiveButtonTitle="Save"
          onPositivePress={console.log}
          negativeButtonTitle={undefined}
        />
        <AppText variant="bodySmall">AppInput</AppText>
        <AppInput label="Name" />
        <AppText variant="bodySmall">AppSearchInput</AppText>
        <AppSearchInput onTextChange={console.log} />
      </AppScreen>
    </SafeAreaView>
  );
};
