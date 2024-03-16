import { AppBox } from '~/view/components';
import { AppText } from '~/view/components/text';

type Props = {
  label: string;
  value?: string;
  disabled?: boolean;
};

export const LabelValue = ({ label, value, disabled }: Props) => {
  return (
    <AppBox>
      <AppText variant="bodySmall" color="onSurfaceVariant" textTransform="uppercase">
        {label}
      </AppText>
      <AppText variant="bodyMedium" color={disabled ? 'onSurfaceVariant' : 'onSurface'}>
        {value}
      </AppText>
    </AppBox>
  );
};
