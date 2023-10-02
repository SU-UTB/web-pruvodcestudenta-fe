import appStore from '../../../assets/images/app-store-cz.svg';
import googlePlay from '../../../assets/images/google-play-cz.png';
import suLogo from '../../../assets/images/su-logo.svg';
import utbLogo from '../../../assets/images/utb-logo.svg';

import { ILink } from '../../../lib/interfaces/ILink';

export const footerLinks: ILink[] = [
  { title: 'UTB.cz', link: 'https://www.utb.cz' },
  {
    title: 'UTB Mapa',
    link: 'https://mapa.utb.cz/',
  },
];

export const appLinks: ILink[] = [
  {
    title: 'Stahuj na App Store',
    img: appStore,
    link: 'https://apps.apple.com/cz/app/moje-utb/id1598369807?l=cs',
  },
  {
    title: 'Stahuj na Google Play',
    img: googlePlay,
    link: 'https://play.google.com/store/apps/details?id=cz.unizone.utb&hl=cs&gl=US',
  },
];

export const contributorLinks: ILink[] = [
  {
    title: 'Studentská Unie UTB',
    img: suLogo,
    link: 'https://www.su.utb.cz/',
  },
  {
    title: 'Univerzita Tomáše Bati',
    img: utbLogo,
    link: 'https://www.utb.cz/',
  },
];
