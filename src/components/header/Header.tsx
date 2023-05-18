import { useNavigate } from 'react-router-dom';

import { Socials } from '../socials/Socials';
import { headerLinks } from './Header.content';
import {
  AppLogo,
  HeaderLink,
  HeaderWrapper,
  LinksWrapper,
} from './Header.styled';

import { useState } from 'react';
import utb from '../../assets/icons/utb.svg';
import HamburgerButton from './hamburger/HamburgerButton';

const AppName = 'Průvodce studenta';

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <AppLogo onClick={() => navigate('/')}>
        <img src={utb} alt="utb_logo" />
        {AppName}
      </AppLogo>
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
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
