import { ReactNode } from 'react';
import { ILink } from '../../../../lib/interfaces/ILink';
import { FooterLinkStyled } from './FooterLink.styled';

interface FooterLinkProps extends ILink {
  image?: string,
  alt?: string,
  children?: ReactNode
}

const FooterLink = ({ link, newTab, image, alt, children }: FooterLinkProps) => {
  return (
    <FooterLinkStyled to={link} target={newTab ? '_blank' : ''}>
      {image &&
        <img src={image} alt={alt} />
      }
      {children}
    </FooterLinkStyled>
  );
};

export default FooterLink;
