import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

// TODO: remove this and never use!!!
export function useEffectWithoutInit(effect: EffectCallback, deps: DependencyList) {
  const initRender = useRef(true);
  useEffect(() => {
    if (initRender.current) {
      initRender.current = false;
    } else {
      effect();
    }
  }, deps);
}
