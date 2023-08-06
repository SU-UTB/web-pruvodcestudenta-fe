import { useState } from 'react';

import { Socials } from '../../socials/Socials';
import { headerLinks } from './Header.content';
import {
  AppLogo,
  HeaderLink,
  HeaderWrapper,
  LinksWrapper,
  LogoHamburgerWrapper,
} from './Header.styled';

import utbMini from '../../../assets/icons/utb-mini-logo.svg';
import { APP_NAME } from '../../../lib/constants';
import HamburgerButton from './hamburger/HamburgerButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <LogoHamburgerWrapper>
        <AppLogo href="/">
          {APP_NAME}
          <img height={18} src={utbMini} alt="utb_logo" />
        </AppLogo>
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </LogoHamburgerWrapper>

      <LinksWrapper isOpen={isOpen}>
        {headerLinks.map(({ title, link, newTab }) => (
          <HeaderLink
            key={link}
            to={link}
            target={newTab ? '_blank' : ''}
            rel="noopener noreferrer"
          >
            {title}
          </HeaderLink>
        ))}
        <Socials />
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default Header;
