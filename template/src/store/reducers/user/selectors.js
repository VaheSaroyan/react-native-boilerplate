import { createSelector } from 'reselect'

const user = (state) => state.user

export const selectFetchOneUserLoading = createSelector([user], (user) => user.loading)

export const selectFetchOneUserError = createSelector(
  [user],
  (user) => user.error,
)
