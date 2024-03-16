declare module '*.svg' {
  import React from 'react';

  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare type Option = {
  label: string;
  value: number | string;
};

declare type Nullable<T> = T | null;
