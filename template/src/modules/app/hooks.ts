import { splashVisibleSelector } from './selectors';
import { hideSplashAction } from './slice';

import { useAppDispatch, useAppSelector } from '~/store/hooks';

export const useSplashVisible = () => {
  const d = useAppDispatch();
  const splashVisible = useAppSelector(splashVisibleSelector);

  const hideSplash = () => {
    d(hideSplashAction());
  };

  return {
    splashVisible,
    hideSplash
  };
};
