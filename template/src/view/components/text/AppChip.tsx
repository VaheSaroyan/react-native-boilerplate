import { AppText } from './AppText';
import { AppBox } from '../layout';

import { useAppTheme } from '~/view/theme';

type Props = {
  text: string;
};

export const AppChip = ({ text }: Props) => {
  const { otherSizes } = useAppTheme();
  return (
    <AppBox
      alignItems="center"
      justifyContent="center"
      height={otherSizes.m}
      paddingHorizontal="sm"
      borderRadius="xl"
      backgroundColor="surfaceContainerHighest">
      <AppText>{text}</AppText>
    </AppBox>
  );
};
