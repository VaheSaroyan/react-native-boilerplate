import { DependencyList, useEffect } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';

export function useAppState(
  onAppStateChange: (state: AppStateStatus) => void,
  deps?: DependencyList
) {
  useEffect(
    () => {
      const subscription = AppState.addEventListener('change', onAppStateChange);
      return () => {
        subscription.remove();
      };
    },
    deps ? [...deps, onAppStateChange] : [onAppStateChange]
  );
}

/**
 * Android only
 *
 * @param onForegroud
 * @param deps
 */
export function useAppFocusState(onForegroud: () => void, deps?: DependencyList) {
  useEffect(
    () => {
      const subscription =
        Platform.OS === 'android' ? AppState.addEventListener('focus', onForegroud) : null;
      return () => {
        if (subscription) {
          subscription.remove();
        }
      };
    },
    deps ? [...deps, onForegroud] : [onForegroud]
  );
}
