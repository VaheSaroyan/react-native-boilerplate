import { Image, ImageProps, ImageSourcePropType } from 'react-native';

interface Props extends ImageProps {
  placeholder?: ImageSourcePropType;
}

export const AppImage = (props: Props) => {
  return <Image {...props} />;
};
