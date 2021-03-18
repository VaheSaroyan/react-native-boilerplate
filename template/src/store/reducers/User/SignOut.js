import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('user/sign-out'),
  reducers(state, { payload }) {
    state.isAuthenticated = false
  },
}
