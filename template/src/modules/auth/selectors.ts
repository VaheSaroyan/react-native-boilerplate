import { RootState } from '~/store/types';

export const signInRqstSelector = (s: RootState) => s.auth.signInRqst;
export const userVerificationSelector = (s: RootState) => s.auth.userVerification;
