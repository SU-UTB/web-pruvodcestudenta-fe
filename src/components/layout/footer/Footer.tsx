import {
  FooterAppSection,
  FooterCopyright,
  FooterLinksWrapper,
  FooterWrapper,
} from './Footer.styled';

import { appLinks, contributorLinks, footerLinks } from './Footer.content';
import FooterLink from './footerLink/FooterLink';

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinksWrapper>
        {contributorLinks.map(({ link, img, title }) => (
          <FooterLink key={link} link={link} newTab>
            <img src={img} alt={title} width={236} height={24} />
          </FooterLink>
        ))}
      </FooterLinksWrapper>
      <FooterAppSection>
        <h4>Aplikace Moje UTB</h4>
        <FooterLinksWrapper>
          {appLinks.map(({ link, img, title }) => (
            <FooterLink key={link} link={link}>
              <img src={img} alt={title} width={134} height={40} />
            </FooterLink>
          ))}
        </FooterLinksWrapper>
      </FooterAppSection>
      <FooterLinksWrapper>
        {footerLinks.map(({ link, title }) => (
          <FooterLink key={link} link={link} newTab>
            {title}
          </FooterLink>
        ))}
      </FooterLinksWrapper>
      <FooterCopyright>©STUDENTSKÁ UNIE UTB, {copyrightYear}</FooterCopyright>
    </FooterWrapper>
  );
};

export default Footer;
