import { socialItems } from './Socials.content';
import { SocialLink, SocialsWrapper } from './Socials.styled';

export const Socials = () => (
  <SocialsWrapper>
    {socialItems.map(({ link, image, alt, newTab }) => (
      <SocialLink key={link} to={link} target={newTab ? '_blank' : ''}>
        <img src={image} alt={alt}></img>
      </SocialLink>
    ))}
  </SocialsWrapper>
);
