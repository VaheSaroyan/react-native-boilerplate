import { clearStorage, deleteData, readData, writeData } from '../storage';

import { SignInResponse } from '~/data/remote/models/auth';

export class AuthStorage {
  static token: string;
  static refreshToken: string;

  static async saveTokens(data: SignInResponse) {
    AuthStorage.token = data.accessToken;
    AuthStorage.refreshToken = data.refreshToken;

    await writeData('token', data);
  }

  static async getAccessToken() {
    if (AuthStorage.token) {
      return AuthStorage.token;
    }
    const t = await readData<SignInResponse>('token');
    return t ? t.accessToken : null;
  }

  static async getRefreshToken() {
    if (AuthStorage.refreshToken) {
      return AuthStorage.refreshToken;
    }
    const t = await readData<SignInResponse>('token');
    return t ? t.refreshToken : null;
  }

  static async removeTokens() {
    AuthStorage.token = '';
    AuthStorage.refreshToken = '';
    await deleteData('token');
  }

  static async signOut() {
    AuthStorage.token = '';
    AuthStorage.refreshToken = '';
    await clearStorage();
  }
}
