import { ISocialItem } from '../../../../lib/interfaces/ISocialItem';
import { FooterLogoLinkStyled } from './FooterLogoLink.styled';

const FooterLogoLink = ({ link, newTab, image, alt }: ISocialItem) => {
  return (
    <FooterLogoLinkStyled to={link} target={newTab ? '_blank' : ''}>
      <img src={image} alt={alt} />
    </FooterLogoLinkStyled>
  );
};

export default FooterLogoLink;
