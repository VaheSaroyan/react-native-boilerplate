import { useState } from 'react';

export const useInput = (validate?: (prop: any) => string, initValue?: string) => {
  const [value, setValue] = useState(initValue ?? '');
  const [error, setError] = useState('');

  const onTextChange = (t: string) => {
    setValue(t);
    if (error) {
      setError('');
    }
  };

  const onBlur = () => {
    const err = validate?.(value);
    if (err) {
      setError(err);
    }
  };

  return {
    value,
    onTextChange,
    onBlur,
    error
  };
};
