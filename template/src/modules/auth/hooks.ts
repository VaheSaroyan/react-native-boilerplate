import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { signInRqstSelector, userVerificationSelector } from './selectors';
import { resetSignInRqstAction, setUserVerifiedAction } from './slice';
import { signInThunk, signOutThunk } from './thunks';

import { AuthStorage } from '~/data';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

export const useSignIn = () => {
  const d = useAppDispatch();
  const signInRqst = useAppSelector(signInRqstSelector);

  const signIn = (phone: string, password: string) => {
    d(signInThunk({ phone, password }));
  };

  useEffect(
    () => () => {
      d(resetSignInRqstAction());
    },
    []
  );

  const resetSignInRqst = () => {
    d(resetSignInRqstAction());
  };

  return { signIn, signInRqst, resetSignInRqst };
};

export const useSignOut = () => {
  const d = useAppDispatch();

  return () => {
    d(signOutThunk());
  };
};

export const useAuthenticated = () => {
  const d = useDispatch();
  const userVerification = useAppSelector(userVerificationSelector);
  const [authenticated, setAuthenticated] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const accessToken = await AuthStorage.getAccessToken();
      if (!accessToken) {
        setAuthenticated(false);
        return;
      }

      if (userVerification !== 'verified') {
        d(setUserVerifiedAction('verified'));
      }

      setAuthenticated(userVerification === 'verified');
    })();
  }, [userVerification]);

  return { authenticated };
};

export const useUserVerification = () => useAppSelector(userVerificationSelector);
