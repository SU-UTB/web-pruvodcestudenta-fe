import { SocialTypes } from '../../lib/enums/SocialTypes';
import { ISocialItem } from '../../lib/interfaces/ISocialItem';

export const SocialItems: ISocialItem[] = [
  {
    type: SocialTypes.instagram,
    link: 'https://www.instagram.com/utbzlin/?hl=cs',
    alt: 'instagram_link',
  },
  {
    type: SocialTypes.facebook,
    link: 'https://www.facebook.com/UTBZlin',
    alt: 'facebook_link',
  },
  {
    type: SocialTypes.youtube,
    link: 'https://www.youtube.com/c/univerzitatomasebativezline',
    alt: 'youtube_link',
  },
];
