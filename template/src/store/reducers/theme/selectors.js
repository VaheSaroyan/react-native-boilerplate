import { createSelector } from 'reselect'

const selectAuth = (state) => state.auth

export const selectUser = createSelector([selectAuth], (auth) => auth.user)

export const selectAuthIsLoading = createSelector(
  [selectAuth],
  (auth) => auth.authIsLoading,
)
