import { PropsWithChildren, useCallback, useRef } from 'react';
import { Platform, ScrollView, ScrollViewProps } from 'react-native';

// TODO: this component crashes the app, investigation is needed
// https://github.com/kirillzyusko/react-native-keyboard-controller/issues/203
// import { KeyboardGestureArea } from 'react-native-keyboard-controller';

interface Props extends ScrollViewProps {}

export const AppKeyboardHandlerView = (props: PropsWithChildren<Props>) => {
  const ref = useRef<ScrollView>(null);

  const scrollToBottom = useCallback(() => {
    ref.current?.scrollToEnd({ animated: false });
  }, []);

  return Platform.OS === 'ios' ? (
    <ScrollView
      ref={ref}
      onContentSizeChange={scrollToBottom}
      keyboardDismissMode="interactive"
      automaticallyAdjustKeyboardInsets={false}
      automaticallyAdjustContentInsets={false}
      contentInsetAdjustmentBehavior="never"
      showsVerticalScrollIndicator={false}
      style={{ overflow: 'visible' }}
      contentContainerStyle={{
        flex: 1
      }}
      keyboardShouldPersistTaps="handled"
      {...props}>
      {props.children}
    </ScrollView>
  ) : (
    // <KeyboardGestureArea style={{ flex: 1 }} interpolator={'linear'}>
    <ScrollView
      style={{ overflow: 'visible' }}
      contentContainerStyle={{
        flex: 1
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      {...props}>
      {props.children}
    </ScrollView>
    // </KeyboardGestureArea>
  );
};
