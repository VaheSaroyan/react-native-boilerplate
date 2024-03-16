import { ColorValue, StyleProp, View, ViewStyle } from 'react-native';

import Discord from '~/assets/svg/socials/discord.svg';
import Facebook from '~/assets/svg/socials/facebook.svg';
import Instagram from '~/assets/svg/socials/instagram.svg';
import Telegram from '~/assets/svg/socials/telegram.svg';
import Tiktok from '~/assets/svg/socials/tiktok.svg';
import Twitter from '~/assets/svg/socials/twitter.svg';
import Whatsapp from '~/assets/svg/socials/whatsapp.svg';

export type SvgImageName =
  | 'discord'
  | 'facebook'
  | 'instagram'
  | 'telegram'
  | 'tiktok'
  | 'twitter'
  | 'whatsapp';

type Props = {
  name: SvgImageName;
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: ColorValue;
};

export const AppSvgImage = ({ name, style, size, color = 'white' }: Props) => {
  switch (name) {
    case 'discord':
      return <Discord style={style} width={size} height={size} />;
    case 'facebook':
      return <Facebook style={style} width={size} height={size} />;
    case 'instagram':
      return <Instagram style={style} width={size} height={size} />;
    case 'telegram':
      return <Telegram style={style} width={size} height={size} />;
    case 'tiktok':
      return <Tiktok style={style} width={size} height={size} />;
    case 'twitter':
      return <Twitter style={style} width={size} height={size} />;
    case 'whatsapp':
      return <Whatsapp style={style} width={size} height={size} />;
    default:
      return <View />;
  }
};
