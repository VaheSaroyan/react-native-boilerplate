import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import { UserApi } from '@/services'

export default {
  initialState: buildAsyncState('fetchOne'),
  action: buildAsyncActions('user/fetchOne', UserApi.getData),
  reducers: buildAsyncReducers({
    errorKey: 'fetchOne.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'fetchOne.loading',
  }),
}
