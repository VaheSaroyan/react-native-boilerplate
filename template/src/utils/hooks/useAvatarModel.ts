import { useAvatarEdit, useUserProfile } from '~/modules/user';

export const useAvatarModel = () => {
  const userProfile = useUserProfile();
  const { avatarEditCount } = useAvatarEdit();

  const edited = avatarEditCount > 0 ? `?edited=${avatarEditCount}` : '';
  return {
    modelUrl: userProfile?.avatar ? `${userProfile.avatar}${edited}` : null
  };
};
