import isUndefined from 'lodash/isUndefined';

import { readData, writeData } from '../storage';

export class AppStorage {
  static privacyDeclarationShown: boolean;

  static async getPrivacyDeclarationShown() {
    if (!isUndefined(AppStorage.privacyDeclarationShown)) {
      return AppStorage.privacyDeclarationShown;
    }

    const data = await readData<{ privacyDeclarationShown: boolean }>('privacy-declaration-shown');
    return data?.privacyDeclarationShown ?? false;
  }

  static async setPrivacyDeclarationShown() {
    AppStorage.privacyDeclarationShown = true;
    await writeData('privacy-declaration-shown', { privacyDeclarationShown: true });
  }
}
