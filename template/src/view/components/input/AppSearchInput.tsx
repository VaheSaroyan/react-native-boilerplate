import debounce from 'lodash/debounce';

import { AppInput } from './AppInput';
import { AppBox } from '../layout';

type Props = {
  onTextChange: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export const AppSearchInput = ({ onTextChange, onFocus, onBlur }: Props) => {
  const debouncedTextChanged = debounce(onTextChange, 500);
  return (
    <AppBox>
      <AppInput
        placeholder="Search"
        leftIcon="search"
        withClear
        onChangeText={debouncedTextChanged}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </AppBox>
  );
};
