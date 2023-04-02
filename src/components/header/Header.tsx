import { useNavigate } from 'react-router-dom';

import { Socials } from '../socials/Socials';
import { HeaderItems } from './Header.content';
import {
  AppLogo,
  HeaderItem,
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
        {HeaderItems.map(({ title, link }) => (
          <HeaderItem key={title} href={link}>
            {title}
          </HeaderItem>
        ))}
        <Socials />
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default Header;
