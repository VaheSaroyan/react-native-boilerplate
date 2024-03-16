import { AppBox } from '../layout';
import { AppText } from '../text';

import { useAppTheme } from '~/view/theme';
import { PoppinsRegular } from '~/view/theme/fonts';

type Props = {
  text: string;
  color?: string;
};

export const AppBadge = ({ text, color }: Props) => {
  const { otherSizes, colors } = useAppTheme();
  return (
    <AppBox
      height={otherSizes.xs}
      alignItems="center"
      justifyContent="center"
      borderRadius="m"
      style={{ backgroundColor: color ?? colors.secondary }}
      minWidth={otherSizes.xs}
      paddingHorizontal={'xs'}>
      <AppText
        style={{
          fontSize: 9,
          lineHeight: undefined,
          fontFamily: PoppinsRegular,
          textAlign: 'center',
          textAlignVertical: 'center'
        }}
        color="onSecondary">
        {text}
      </AppText>
    </AppBox>
  );
};
