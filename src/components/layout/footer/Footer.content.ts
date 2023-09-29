import appleIcon from '../../../assets/icons/apple-logo.svg';
import googlePlayIcon from '../../../assets/icons/google-playstore-logo.svg';
import { ILink } from '../../../lib/interfaces/ILink';

export const footerLinks: Array<ILink> = [
  { title: 'UTB.cz', link: 'https://www.utb.cz', newTab: true },
  {
    title: 'Aplikace UTB',
    icon: googlePlayIcon,
    link: 'https://play.google.com/store/apps/details?id=cz.unizone.utb&hl=cs&gl=US',
    newTab: true,
  },
  {
    title: 'Aplikace UTB',
    icon: appleIcon,
    link: 'https://apps.apple.com/cz/app/moje-utb/id1598369807?l=cs',
    newTab: true,
  },
  {
    title: 'UTB Mapa',
    link: 'https://mapa.utb.cz/',
    newTab: true,
  },
];
