import { FooterLinksWrapper, FooterWrapper } from './Footer.styled';

import suLogo from '../../../assets/images/su-logo.svg';
import utbLogo from '../../../assets/images/utb-logo.svg';
import FooterLogoLink from './footerLogoLink/FooterLogoLink';

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinksWrapper>
        <FooterLogoLink
          image={suLogo}
          alt="Studentská Unie UTB"
          link="https://www.su.utb.cz/"
          newTab={true}
        />
        <FooterLogoLink
          image={utbLogo}
          alt="Univerzita Tomáše Bati"
          link="https://www.utb.cz/"
          newTab={true}
        />
      </FooterLinksWrapper>
      <p>©STUDENTSKÁ UNIE UTB, {copyrightYear}</p>
    </FooterWrapper>
  );
};

export default Footer;
