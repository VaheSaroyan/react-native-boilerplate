import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserVerificationState } from './types';

import { AppHttpError, AuthApi, AuthStorage, SignInParams } from '~/data';
import { resetStore } from '~/modules/app';

export const signInThunk = createAsyncThunk<
  UserVerificationState,
  SignInParams,
  { rejectValue: AppHttpError }
>('signInThunk', async (params, { rejectWithValue, getState }) => {
  try {
    const tokens = await AuthApi.signIn(params);
    await AuthStorage.saveTokens(tokens);
    return 'verified';
  } catch (e: unknown) {
    const err = e as AppHttpError;
    return rejectWithValue(err);
  }
});

export const signOutThunk = createAsyncThunk<undefined, undefined, { rejectValue: AppHttpError }>(
  'signOutThunk',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await AuthStorage.signOut();
      dispatch(resetStore());
    } catch (e: unknown) {
      const err = e as AppHttpError;
      return rejectWithValue(err);
    }
  }
);
