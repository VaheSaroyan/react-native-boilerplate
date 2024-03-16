import { RequestSliceState } from '~/store/types';

export type UserVerificationState = 'verified' | 'not_verified' | 'unknown';

export interface AuthSlice {
  userVerification: UserVerificationState;
  signInRqst: RequestSliceState;
}
