import { useEffect, useState } from 'react';

import { KeyboardEventData, KeyboardEvents } from 'react-native-keyboard-controller';

type KeyboardConfig = {
  shown: boolean;
  height: number;
  durartion?: number;
};

export function useKeyboard() {
  const [keyboard, setKeyboard] = useState<KeyboardConfig>({
    height: 0,
    shown: false
  });

  const handleKeyboardWillShow = (e: KeyboardEventData) => {
    setKeyboard({
      height: e.height,
      shown: true,
      durartion: e.duration
    });
  };

  const handleKeyboardWillHide = (e: KeyboardEventData) => {
    setKeyboard({
      height: e.height,
      shown: false,
      durartion: e.duration
    });
  };

  useEffect(() => {
    const subscriptions = [
      KeyboardEvents.addListener('keyboardWillShow', handleKeyboardWillShow),
      KeyboardEvents.addListener('keyboardWillHide', handleKeyboardWillHide)
    ];

    return () => {
      subscriptions.forEach(subscription => subscription.remove());
    };
  }, []);

  return keyboard;
}
