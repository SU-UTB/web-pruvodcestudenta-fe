import { ReactNode } from 'react';
import { ILink } from '../../../../lib/interfaces/ILink';
import { FooterLinkStyled } from './FooterLink.styled';

interface FooterLinkProps extends ILink {
  children?: ReactNode;
}

const FooterLink = ({ link, newTab, children }: FooterLinkProps) => {
  return (
    <FooterLinkStyled to={link} target={newTab ? '_blank' : ''}>
      {children}
    </FooterLinkStyled>
  );
};

export default FooterLink;
