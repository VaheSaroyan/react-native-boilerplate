import { Api } from '@/services/Api'

export class UserApi {
  static getData = async (userId) => {
    if (!userId) {
      return Api.handleError({ message: 'User ID is required' })
    }
    const { data } = await Api.get(`users/${userId}`)

    return data
  }
}
