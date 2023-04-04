import { SocialTypes } from '../../lib/enums/SocialTypes';
import { SocialItems } from './Socials.content';
import { SocialLink, SocialsWrapper } from './Socials.styled';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import youtube from '../../assets/icons/youtube.svg';

const getImage = (type: SocialTypes) => {
  switch (type) {
    case SocialTypes.facebook:
      return facebook;
    case SocialTypes.instagram:
      return instagram;
    case SocialTypes.youtube:
      return youtube;
  }
};

export const Socials = () => (
  <SocialsWrapper>
    {SocialItems.map(({ type, link, alt }) => (
      <SocialLink key={type.toString()} href={link}>
        <img src={getImage(type)} alt={alt}></img>
      </SocialLink>
    ))}
  </SocialsWrapper>
);
