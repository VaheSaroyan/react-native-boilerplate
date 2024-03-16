import { createSlice } from '@reduxjs/toolkit';

import { AppSlice } from './types';

const initialState: AppSlice = {
  privacyDeclarationShown: true,
  splashVisible: true
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetStore() {
      return initialState;
    },
    hideSplashAction: state => {
      state.splashVisible = false;
    }
  }
});

const appReducer = slice.reducer;

const { resetStore, hideSplashAction } = slice.actions;

export { appReducer, resetStore, hideSplashAction };
