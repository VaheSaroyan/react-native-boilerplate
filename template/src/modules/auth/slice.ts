import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { signInThunk } from './thunks';
import { AuthSlice, UserVerificationState } from './types';

import { failure, idle, loading, success } from '~/store/redux-utils';

const initialState: AuthSlice = {
  userVerification: 'unknown',
  signInRqst: idle()
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserVerifiedAction: (state, action: PayloadAction<UserVerificationState>) => {
      state.userVerification = action.payload;
    },
    resetSignInRqstAction: state => {
      state.signInRqst = idle();
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signInThunk.pending, state => {
        state.signInRqst = loading(state.signInRqst);
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.signInRqst = success();
        state.userVerification = action.payload;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.signInRqst = failure(state.signInRqst, action.payload);
      });
  }
});

const authReducer = slice.reducer;
const { setUserVerifiedAction, resetSignInRqstAction } = slice.actions;

export { authReducer, setUserVerifiedAction, resetSignInRqstAction };
