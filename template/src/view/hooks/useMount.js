import { useEffect } from 'react';

export function useMount(cb) {
  useEffect(cb, []);
}
