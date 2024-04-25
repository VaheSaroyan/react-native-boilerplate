import { useMemo } from 'react';

import Config from 'react-native-config';
import { getBuildNumber, getVersion } from 'react-native-device-info';

export const useAppVersion = () => {
  const { ENV } = Config;

  const appVersion = useMemo(() => {
    switch (ENV) {
      case 'PROD':
        return `Version - ${getVersion()} (${getBuildNumber()})`;
      case 'STAGE':
        return `Stage - ${getVersion()} (${getBuildNumber()})`;
      default:
        return `Dev - ${getVersion()} (${getBuildNumber()})`;
    }
  }, [ENV, getVersion, getBuildNumber]);

  return appVersion;
};
