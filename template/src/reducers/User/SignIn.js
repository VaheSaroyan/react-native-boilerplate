import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('user/sign-in'),
  reducers(state, { payload }) {
    state.isAuthenticated = true
  },
}
