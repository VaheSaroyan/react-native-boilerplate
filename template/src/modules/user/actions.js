import { createAction } from 'deox';

export const setUser = createAction('user/SET_USER', resolve => payload => resolve(payload));

export const setAuth = createAction('user/SET_AUTH', resolve => payload => resolve(payload));

export const signOut = createAction('user/SIGN_OUT');
