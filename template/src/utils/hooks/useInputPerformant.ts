import { useCallback, useEffect, useRef, useState } from 'react';

import debounce from 'lodash/debounce';
import isUndefined from 'lodash/isUndefined';

type Options = {
  validator?: (prop: any) => string;
  validateOnMount?: boolean;
  validateOnBlur?: boolean;
};

type State = {
  error: string;
  renderCounter: number;
};

export const useInputPerformant = (initValue?: string, opt?: Options) => {
  const inputValueRef = useRef<string>('');
  const [error, setError] = useState<State>({ error: '', renderCounter: 0 });

  useEffect(() => {
    if (!isUndefined(initValue)) {
      inputValueRef.current = initValue ?? '';

      if (opt?.validateOnMount) {
        validate();
      }
    }
  }, []);

  const onTextChange = (text: string) => {
    inputValueRef.current = text;

    if (!opt?.validateOnBlur) {
      debouncedValidate();
    }
  };

  const onBlur = () => {
    if (opt?.validateOnBlur) {
      validate();
    }
  };

  const validate = () => {
    const err = opt?.validator?.(inputValueRef.current);
    if (err) {
      setError(prev => ({
        error: err,
        renderCounter: prev.renderCounter + 1
      }));
    } else {
      setError(prev => ({
        error: '',
        renderCounter: prev.renderCounter + 1
      }));
    }
  };

  const debouncedValidate = useCallback(debounce(validate, 500), [opt?.validator]);

  return {
    defaultValue: initValue ?? '',
    valueRef: inputValueRef,
    onTextChange,
    onBlur,
    error: error.error,
    updater: error.renderCounter
  };
};
