import { ISocialItem } from '../../lib/interfaces/ISocialItem';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import youtube from '../../assets/icons/youtube.svg';

export const socialItems: ISocialItem[] = [
  {
    link: 'https://www.instagram.com/utbzlin/?hl=cs',
    image: instagram,
    alt: 'instagram_link',
    newTab: true,
  },
  {
    link: 'https://www.facebook.com/UTBZlin',
    image: facebook,
    alt: 'facebook_link',
    newTab: true,
  },
  {
    link: 'https://www.youtube.com/c/univerzitatomasebativezline',
    image: youtube,
    alt: 'youtube_link',
    newTab: true,
  },
];
