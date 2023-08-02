import { FooterLinksWrapper, FooterWrapper } from './Footer.styled';

import suLogo from '../../../assets/images/su-logo.svg';
import utbLogo from '../../../assets/images/utb-logo.svg';
import FooterLogoLink from './footerLink/FooterLink';
import { footerLinks } from './Footer.content';
import FooterLink from './footerLink/FooterLink';

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinksWrapper>
        <FooterLink
          image={suLogo}
          alt="Studentská Unie UTB"
          link="https://www.su.utb.cz/"
          newTab={true}
        />
        <FooterLink
          image={utbLogo}
          alt="Univerzita Tomáše Bati"
          link="https://www.utb.cz/"
          newTab={true}
        />
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        {footerLinks.map(({ link, newTab, title }) => (
          <FooterLink link={link} newTab={newTab}>{title}</FooterLink>
        )

        )}
      </FooterLinksWrapper>
      <p>©STUDENTSKÁ UNIE UTB, {copyrightYear}</p>
    </FooterWrapper>
  );
};

export default Footer;
