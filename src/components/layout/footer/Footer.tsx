import { FooterWrapper } from './Footer.styled';

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return <FooterWrapper>©STUDENTSKÁ UNIE UTB, {copyrightYear}</FooterWrapper>;
};

export default Footer;
