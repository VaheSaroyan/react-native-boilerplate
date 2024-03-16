import {
  color,
  ColorProps,
  composeRestyleFunctions,
  createRestyleFunction,
  useRestyle,
  VariantProps
} from '@shopify/restyle';

import AddUser from '~/assets/svg/ic-add-user.svg';
import ArrowDown from '~/assets/svg/ic-arrow-down.svg';
import ArrowRight from '~/assets/svg/ic-arrow-right.svg';
import ArrowTopRight from '~/assets/svg/ic-arrow-top-right.svg';
import ArrowUp from '~/assets/svg/ic-arrow-up.svg';
import BarChartOutline from '~/assets/svg/ic-bar-chart-outline.svg';
import CalendarToday from '~/assets/svg/ic-calendar-today.svg';
import Calendar from '~/assets/svg/ic-calendar.svg';
import CalendarMonth from '~/assets/svg/ic-calendar_month.svg';
import Camera from '~/assets/svg/ic-camera.svg';
import CheckCircle from '~/assets/svg/ic-check-circle.svg';
import ChevronDown from '~/assets/svg/ic-chevron-down.svg';
import ChevronLeft from '~/assets/svg/ic-chevron-left.svg';
import ChevronRight from '~/assets/svg/ic-chevron-right.svg';
import CircleClose from '~/assets/svg/ic-circle-close.svg';
import ClipboardIcon from '~/assets/svg/ic-clipboard.svg';
import CommentIcon from '~/assets/svg/ic-comment.svg';
import ContactSupport from '~/assets/svg/ic-contact-support.svg';
import Contacts from '~/assets/svg/ic-contacts.svg';
import DataBuyers from '~/assets/svg/ic-data-buyers.svg';
import Download from '~/assets/svg/ic-download.svg';
import EditAvatar from '~/assets/svg/ic-edit-avatar.svg';
import Edit from '~/assets/svg/ic-edit.svg';
import EditPencil from '~/assets/svg/ic-edit_pencil.svg';
import Email from '~/assets/svg/ic-email.svg';
import Explore from '~/assets/svg/ic-explore.svg';
import EyeHiddenIcon from '~/assets/svg/ic-eye-hidden.svg';
import EyeShowIcon from '~/assets/svg/ic-eye-show.svg';
import FlagOutlined from '~/assets/svg/ic-flag-outlined.svg';
import Flag from '~/assets/svg/ic-flag.svg';
import FullScreen from '~/assets/svg/ic-full-screen.svg';
import GobletSearch from '~/assets/svg/ic-goblet-search.svg';
import Goblet from '~/assets/svg/ic-goblet.svg';
import Grid from '~/assets/svg/ic-grid.svg';
import Groups from '~/assets/svg/ic-groups.svg';
import HeartOutline from '~/assets/svg/ic-heart-outline.svg';
import Heart from '~/assets/svg/ic-heart.svg';
import Human from '~/assets/svg/ic-human.svg';
import ImagePicker from '~/assets/svg/ic-image-picker.svg';
import InfoFilled from '~/assets/svg/ic-info-filled.svg';
import InviteContacts from '~/assets/svg/ic-invite-contacts.svg';
import LeadingStar from '~/assets/svg/ic-leading-star.svg';
import Link from '~/assets/svg/ic-link.svg';
import LocationMarkIcon from '~/assets/svg/ic-location-mark.svg';
import Lock from '~/assets/svg/ic-lock.svg';
import Logout from '~/assets/svg/ic-logout.svg';
import ManageAccounts from '~/assets/svg/ic-manage-accounts.svg';
import ManageAdmins from '~/assets/svg/ic-manage-admins.svg';
import Menu from '~/assets/svg/ic-menu.svg';
import Message from '~/assets/svg/ic-message.svg';
import EmptyMembers from '~/assets/svg/ic-multiple-accounts-empty.svg';
import NotFoundLocationMark from '~/assets/svg/ic-not-found-location-mark.svg';
import Notifications from '~/assets/svg/ic-notifications.svg';
import OnlyLocationMark from '~/assets/svg/ic-only-location-mark.svg';
import PersonOutline from '~/assets/svg/ic-person-outline.svg';
import Person from '~/assets/svg/ic-person.svg';
import PersonalInfo from '~/assets/svg/ic-personal-info.svg';
import Phone from '~/assets/svg/ic-phone.svg';
import Photo from '~/assets/svg/ic-photo.svg';
import PlaceIcon from '~/assets/svg/ic-place.svg';
import PrivacyPolicy from '~/assets/svg/ic-privacy-policy.svg';
import Profile from '~/assets/svg/ic-profile.svg';
import QuestionMarkSquare from '~/assets/svg/ic-question-mark-square.svg';
import Reload from '~/assets/svg/ic-reload.svg';
import RemoveUser from '~/assets/svg/ic-remove-user.svg';
import Rocket from '~/assets/svg/ic-rocket.svg';
import Rotate from '~/assets/svg/ic-rotate.svg';
import Search from '~/assets/svg/ic-search.svg';
import SendIcon from '~/assets/svg/ic-send.svg';
import Settings from '~/assets/svg/ic-settings.svg';
import Share from '~/assets/svg/ic-share.svg';
import SmileSad from '~/assets/svg/ic-smile-sad.svg';
import Star from '~/assets/svg/ic-star.svg';
import VoteIcon from '~/assets/svg/ic-vote.svg';
import Wallet from '~/assets/svg/ic-wallet.svg';
import Wearable from '~/assets/svg/ic-wearable.svg';
import Website from '~/assets/svg/ic-website.svg';
import ZoomOut from '~/assets/svg/ic-zoom-out.svg';
import Discord from '~/assets/svg/social/ic-discord.svg';
import Facebook from '~/assets/svg/social/ic-facebook.svg';
import Instagram from '~/assets/svg/social/ic-instagram.svg';
import Linkedin from '~/assets/svg/social/ic-linkedin.svg';
import Telegram from '~/assets/svg/social/ic-telegram.svg';
import Tiktok from '~/assets/svg/social/ic-tiktok.svg';
import Twitter from '~/assets/svg/social/ic-twitter.svg';
import Whatsapp from '~/assets/svg/social/ic-whatsapp.svg';
import DiscordMain from '~/assets/svg/socials/discord.svg';
import FacebookMain from '~/assets/svg/socials/facebook.svg';
import InstagramMain from '~/assets/svg/socials/instagram.svg';
import TelegramMain from '~/assets/svg/socials/telegram.svg';
import TikTokMain from '~/assets/svg/socials/tiktok.svg';
import TwitterMain from '~/assets/svg/socials/twitter.svg';
import WhatsappMain from '~/assets/svg/socials/whatsapp.svg';
import TabActivities from '~/assets/svg/tabs/ic-tab-activity.svg';
import TabEvents from '~/assets/svg/tabs/ic-tab-events.svg';
import TabHome from '~/assets/svg/tabs/ic-tab-home.svg';
import TabProfile from '~/assets/svg/tabs/ic-tab-profile.svg';
import { AppTheme } from '~/view/theme';

export type IconName =
  | 'tab-home'
  | 'tab-activities'
  | 'tab-events'
  | 'tab-profile'
  | 'add-user'
  | 'calendar'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'edit'
  | 'flag-outlined'
  | 'flag'
  | 'goblet'
  | 'grid'
  | 'goblet-search'
  | 'groups'
  | 'edit-avatar'
  | 'link'
  | 'lock'
  | 'info-filled'
  | 'heart-outline'
  | 'heart'
  | 'place'
  | 'personal-info'
  | 'person-outline'
  | 'human'
  | 'data-buyers'
  | 'wearable'
  | 'profile'
  | 'logout'
  | 'invite-contacts'
  | 'menu'
  | 'eye-show'
  | 'eye-hidden'
  | 'contacts'
  | 'email'
  | 'phone'
  | 'question-mark-square'
  | 'rotate'
  | 'image-picker'
  | 'share'
  | 'smile-sad'
  | 'settings'
  | 'location-mark'
  | 'comment'
  | 'vote'
  | 'bar-chart-outline'
  | 'download'
  | 'reload'
  | 'not-found-location-mark'
  | 'rocket'
  | 'manage-accounts'
  | 'calendar-month'
  | 'facebook'
  | 'website'
  | 'instagram'
  | 'linkedin'
  | 'tiktok'
  | 'twitter'
  | 'person'
  | 'star'
  | 'full-screen'
  | 'zoom-out'
  | 'wallet'
  | 'manage-admins'
  | 'only-location-mark'
  | 'website-main'
  | 'tiktok-main'
  | 'facebook-main'
  | 'instagram-main'
  | 'twitter-main'
  | 'discord-main'
  | 'telegram-main'
  | 'whatsapp-main'
  | 'edit-pencil'
  | 'check-circle'
  | 'camera'
  | 'photo'
  | 'empty-accounts'
  | 'remove-user'
  | 'message'
  | 'send'
  | 'calendar-today'
  | 'arrow-right'
  | 'arrow-top-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'leading-star'
  | 'notifications'
  | 'contact-support'
  | 'explore'
  | 'privacy-policy'
  | 'clipboard'
  | 'whatsapp'
  | 'telegram'
  | 'discord'
  | 'search'
  | 'circle-close';

export type IconProps = ThemedProps & {
  name: IconName;
};

type ThemedProps = ColorProps<AppTheme> & VariantProps<AppTheme, 'iconSizes', 'size'>;

/**
 * map "size" prop to "width" StylProp using iconSizes from AppTheme
 */
const size = createRestyleFunction<AppTheme>({
  property: 'size',
  styleProperty: 'width',
  transform: v => {
    const key = v.value as keyof typeof v.theme.iconSizes;
    return v.theme.iconSizes[key];
  }
});

const restyleFunctions = composeRestyleFunctions<AppTheme, ThemedProps>([color, size as any]);

export const AppIcon = ({ name, color = 'onSurface', size = 'm' }: IconProps) => {
  // seems like types are broken ... :(, so "any" for now
  const props: any = useRestyle(restyleFunctions as any, {
    color,
    size
  });
  const style: any = props.style[0];
  const widthValue = style['width'];
  const colorValue = style['color'];

  switch (name) {
    case 'tab-home':
      return <TabHome width={widthValue} height={widthValue} color={colorValue} />;
    case 'tab-activities':
      return <TabActivities width={widthValue} height={widthValue} color={colorValue} />;
    case 'tab-events':
      return <TabEvents width={widthValue} height={widthValue} color={colorValue} />;
    case 'tab-profile':
      return <TabProfile width={widthValue} height={widthValue} color={colorValue} />;
    case 'add-user':
      return <AddUser width={widthValue} height={widthValue} color={colorValue} />;
    case 'calendar':
      return <Calendar width={widthValue} height={widthValue} color={colorValue} />;
    case 'chevron-down':
      return <ChevronDown width={widthValue} height={widthValue} color={colorValue} />;
    case 'chevron-left':
      return <ChevronLeft width={widthValue} height={widthValue} color={colorValue} />;
    case 'chevron-right':
      return <ChevronRight width={widthValue} height={widthValue} color={colorValue} />;
    case 'edit':
      return <Edit width={widthValue} height={widthValue} color={colorValue} />;
    case 'flag-outlined':
      return <FlagOutlined width={widthValue} height={widthValue} color={colorValue} />;
    case 'flag':
      return <Flag width={widthValue} height={widthValue} color={colorValue} />;
    case 'goblet':
      return <Goblet width={widthValue} height={widthValue} color={colorValue} />;
    case 'grid':
      return <Grid width={widthValue} height={widthValue} color={colorValue} />;
    case 'goblet-search':
      return <GobletSearch width={widthValue} height={widthValue} color={colorValue} />;
    case 'groups':
      return <Groups width={widthValue} height={widthValue} color={colorValue} />;
    case 'edit-avatar':
      return <EditAvatar width={widthValue} height={widthValue} color={colorValue} />;
    case 'link':
      return <Link width={widthValue} height={widthValue} color={colorValue} />;
    case 'lock':
      return <Lock width={widthValue} height={widthValue} color={colorValue} />;
    case 'info-filled':
      return <InfoFilled width={widthValue} height={widthValue} color={colorValue} />;
    case 'heart-outline':
      return <HeartOutline width={widthValue} height={widthValue} color={colorValue} />;
    case 'heart':
      return <Heart width={widthValue} height={widthValue} color={colorValue} />;
    case 'place':
      return <PlaceIcon width={widthValue} height={widthValue * 1.3125} color={colorValue} />;
    case 'personal-info':
      return <PersonalInfo width={widthValue} height={widthValue} color={colorValue} />;
    case 'person-outline':
      return <PersonOutline width={widthValue} height={widthValue} color={colorValue} />;
    case 'human':
      return <Human width={widthValue} height={widthValue} color={colorValue} />;
    case 'data-buyers':
      return <DataBuyers width={widthValue} height={widthValue} color={colorValue} />;
    case 'wearable':
      return <Wearable width={widthValue} height={widthValue} color={colorValue} />;
    case 'profile':
      return <Profile width={widthValue} height={widthValue} color={colorValue} />;
    case 'logout':
      return <Logout width={widthValue} height={widthValue} color={colorValue} />;
    case 'invite-contacts':
      return <InviteContacts width={widthValue} height={widthValue} color={colorValue} />;
    case 'menu':
      return <Menu width={widthValue} height={widthValue} color={colorValue} />;
    case 'eye-show':
      return <EyeShowIcon width={widthValue} height={widthValue} color={colorValue} />;
    case 'eye-hidden':
      return <EyeHiddenIcon width={widthValue} height={widthValue} color={colorValue} />;
    case 'contacts':
      return <Contacts width={widthValue} height={widthValue} color={colorValue} />;
    case 'email':
      return <Email width={widthValue} height={widthValue} color={colorValue} />;
    case 'phone':
      return <Phone width={widthValue} height={widthValue} color={colorValue} />;
    case 'question-mark-square':
      return <QuestionMarkSquare width={widthValue} height={widthValue} color={colorValue} />;
    case 'rotate':
      return <Rotate width={widthValue} height={widthValue} color={colorValue} />;
    case 'image-picker':
      return <ImagePicker width={widthValue} height={widthValue} color={colorValue} />;
    case 'share':
      return <Share width={widthValue} height={widthValue} color={colorValue} />;
    case 'smile-sad':
      return <SmileSad width={widthValue} height={widthValue} color={colorValue} />;
    case 'settings':
      return <Settings width={widthValue} height={widthValue} color={colorValue} />;
    case 'location-mark':
      return <LocationMarkIcon width={widthValue} height={widthValue} color={colorValue} />;
    case 'comment':
      return <CommentIcon width={widthValue} height={widthValue} color={colorValue} />;
    case 'vote':
      return <VoteIcon width={widthValue} height={widthValue} color={colorValue} />;
    case 'bar-chart-outline':
      return <BarChartOutline width={widthValue} height={widthValue} color={colorValue} />;
    case 'download':
      return <Download width={widthValue} height={widthValue} color={colorValue} />;
    case 'reload':
      return <Reload width={widthValue} height={widthValue} color={colorValue} />;
    case 'not-found-location-mark':
      return <NotFoundLocationMark width={widthValue} height={widthValue} color={colorValue} />;
    case 'rocket':
      return <Rocket width={widthValue} height={widthValue} color={colorValue} />;
    case 'manage-accounts':
      return <ManageAccounts width={widthValue} height={widthValue} color={colorValue} />;
    case 'calendar-month':
      return <CalendarMonth width={widthValue} height={widthValue} color={colorValue} />;
    case 'facebook':
      return <Facebook width={widthValue} height={widthValue} color={colorValue} />;
    case 'website':
      return <Website width={widthValue} height={widthValue} color={colorValue} />;
    case 'instagram':
      return <Instagram width={widthValue} height={widthValue} color={colorValue} />;
    case 'linkedin':
      return <Linkedin width={widthValue} height={widthValue} color={colorValue} />;
    case 'tiktok':
      return <Tiktok width={widthValue} height={widthValue} color={colorValue} />;
    case 'twitter':
      return <Twitter width={widthValue} height={widthValue} color={colorValue} />;
    case 'person':
      return <Person color={colorValue} width={widthValue} height={widthValue} />;
    case 'star':
      return <Star color={colorValue} width={widthValue} height={widthValue} />;
    case 'full-screen':
      return <FullScreen width={widthValue} height={widthValue} color={colorValue} />;
    case 'zoom-out':
      return <ZoomOut width={widthValue} height={widthValue} color={colorValue} />;
    case 'wallet':
      return <Wallet width={widthValue} height={widthValue} color={colorValue} />;
    case 'manage-admins':
      return <ManageAdmins width={widthValue} height={widthValue} color={colorValue} />;
    case 'only-location-mark':
      return <OnlyLocationMark width={widthValue} height={widthValue} color={colorValue} />;
    case 'website-main':
      return <Website width={widthValue} height={widthValue} color={colorValue} />;
    case 'tiktok-main':
      return <TikTokMain width={widthValue} height={widthValue} />;
    case 'facebook-main':
      return <FacebookMain width={widthValue} height={widthValue} />;
    case 'instagram-main':
      return <InstagramMain width={widthValue} height={widthValue} />;
    case 'twitter-main':
      return <TwitterMain width={widthValue} height={widthValue} />;
    case 'discord-main':
      return <DiscordMain width={widthValue} height={widthValue} />;
    case 'telegram-main':
      return <TelegramMain width={widthValue} height={widthValue} />;
    case 'whatsapp-main':
      return <WhatsappMain width={widthValue} height={widthValue} />;
    case 'edit-pencil':
      return <EditPencil width={widthValue} height={widthValue} color={colorValue} />;
    case 'check-circle':
      return <CheckCircle width={widthValue} height={widthValue} color={colorValue} />;
    case 'camera':
      return <Camera width={widthValue} height={widthValue} color={colorValue} />;
    case 'photo':
      return <Photo width={widthValue} height={widthValue} color={colorValue} />;
    case 'empty-accounts':
      return <EmptyMembers width={widthValue} height={widthValue} color={colorValue} />;
    case 'remove-user':
      return <RemoveUser width={widthValue} height={widthValue} color={colorValue} />;
    case 'message':
      return <Message width={widthValue} height={widthValue} color={colorValue} />;
    case 'send':
      return <SendIcon width={widthValue} height={widthValue} color={colorValue} style={style} />;
    case 'calendar-today':
      return (
        <CalendarToday width={widthValue} height={widthValue} color={colorValue} style={style} />
      );
    case 'arrow-right':
      return <ArrowRight width={widthValue} height={widthValue} color={colorValue} style={style} />;
    case 'arrow-top-right':
      return (
        <ArrowTopRight width={widthValue} height={widthValue} color={colorValue} style={style} />
      );
    case 'arrow-up':
      return <ArrowUp width={widthValue} height={widthValue} color={colorValue} style={style} />;
    case 'arrow-down':
      return <ArrowDown width={widthValue} height={widthValue} color={colorValue} style={style} />;
    case 'leading-star':
      return (
        <LeadingStar width={widthValue} height={widthValue} color={colorValue} style={style} />
      );
    case 'notifications':
      return (
        <Notifications width={widthValue} height={widthValue} color={colorValue} style={style} />
      );
    case 'contact-support':
      return (
        <ContactSupport width={widthValue} height={widthValue} color={colorValue} style={style} />
      );
    case 'explore':
      return <Explore width={widthValue} height={widthValue} color={colorValue} style={style} />;
    case 'privacy-policy':
      return (
        <PrivacyPolicy width={widthValue} height={widthValue} color={colorValue} style={style} />
      );
    case 'clipboard':
      return (
        <ClipboardIcon width={widthValue} height={widthValue} color={colorValue} style={style} />
      );
    case 'whatsapp':
      return <Whatsapp width={widthValue} height={widthValue} color={colorValue} style={style} />;
    case 'telegram':
      return <Telegram width={widthValue} height={widthValue} color={colorValue} style={style} />;
    case 'discord':
      return <Discord width={widthValue} height={widthValue} color={colorValue} style={style} />;
    case 'search':
      return <Search width={widthValue} height={widthValue} color={colorValue} style={style} />;
    case 'circle-close':
      return (
        <CircleClose width={widthValue} height={widthValue} color={colorValue} style={style} />
      );
    default:
      return null;
  }
};
