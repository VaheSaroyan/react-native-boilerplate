import { API } from '../api';
import { SignInParams, SignInResponse } from '../models';

export class AuthApi {
  static signInPath: string = '/refresh';
  static tokenRefreshPath: string = '/refresh';

  static async signIn(params: SignInParams): Promise<SignInResponse> {
    const { data } = await API.postPublic(AuthApi.signInPath, params);
    return data;
  }

  static async refreshToken(refreshToken: string): Promise<SignInResponse> {
    const { data } = await API.postPublic(AuthApi.tokenRefreshPath, { refreshToken });
    return data;
  }
}
