import { useEffect, useRef } from 'react';

import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import isNil from 'lodash/isNil';

import { AppSnackbar } from '~/view/components';

export const useNetwork = () => {
  const wasRefreshed = useRef(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(netInfoStateHandler);

    return () => {
      unsubscribe();
    };
  }, []);

  const netInfoStateHandler = (state: NetInfoState) => {
    const hasInternet = state.isInternetReachable;

    if (isNil(hasInternet)) {
      return;
    }

    if (!hasInternet) {
      // to make sure that internet is really unreachable,
      // we refresh the netinfo state first time we see
      // "isInternetReachable": false and ONLY after that
      // show the toast if "isInternetReachable": false
      // second time
      try {
        if (!wasRefreshed.current) {
          NetInfo.refresh();
          wasRefreshed.current = true;
          return;
        }
      } catch (e) {
        console.log('Error while updating netinfo state', e);
      }

      if (wasRefreshed.current) {
        AppSnackbar.show('error', 'No Internet Connection');
        wasRefreshed.current = false;
      }
    } else {
      AppSnackbar.hide();
      wasRefreshed.current = false;
    }
  };
};
