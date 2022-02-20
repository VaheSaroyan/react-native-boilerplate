import { Api } from './Api';

export class User {
  static async signIn(params) {
    const { data } = await Api.post('/sign-in/', params);
    return {
      user: User.createFromApi(data),
      accessToken: data.access,
      refreshToken: data.refresh,
    };
  }

  static createFromApi(data) {
    return {
      id: data.id,
      email: data.email,
    };
  }
}
