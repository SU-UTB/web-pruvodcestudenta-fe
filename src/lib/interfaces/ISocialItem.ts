import { SocialTypes } from '../enums/SocialTypes';

export interface ISocialItem {
  type: SocialTypes;
  link: string;
  alt: string;
}
