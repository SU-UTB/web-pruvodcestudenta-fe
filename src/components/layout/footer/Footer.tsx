import { FooterLinksWrapper, FooterWrapper } from './Footer.styled';

import suLogo from '../../../assets/images/su-logo.svg';
import utbLogo from '../../../assets/images/utb-logo.svg';

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinksWrapper>
        <img src={suLogo} alt="Studentská Unie UTB" />
        <img src={utbLogo} alt="Univerzita Tomáše Bati" />
      </FooterLinksWrapper>
      <p>©STUDENTSKÁ UNIE UTB, {copyrightYear}</p>
    </FooterWrapper>
  );
};

export default Footer;
