import { AppText } from './AppText';
import { AppBadge } from '../feedback';
import { AppBox } from '../layout';

type Props = {
  label: string;
  badgeText?: string;
};

export const SectionLabel = ({ label, badgeText }: Props) => {
  return (
    <AppBox flexDirection="row" columnGap="xs" alignItems="center">
      <AppText textTransform="uppercase" color="onSurfaceVariant">
        {label}
      </AppText>
      {badgeText && <AppBadge text={badgeText} />}
    </AppBox>
  );
};
