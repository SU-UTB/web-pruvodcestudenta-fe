import { useNavigate } from 'react-router-dom';

import { Socials } from '../socials/Socials';
import { HeaderItems } from './Header.content';
import {
  AppLogo,
  AppLogoImage,
  HeaderItem,
  HeaderWrapper,
} from './Header.styled';

import utb from '../../assets/icons/utb.svg';

const AppName = 'Průvodce studenta';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <AppLogo onClick={() => navigate('/')}>
        <AppLogoImage src={utb} alt="utb_logo" />
        {AppName}
      </AppLogo>
      {HeaderItems.map(({ title, link }) => (
        <HeaderItem key={title} href={link}>
          {title}
        </HeaderItem>
      ))}
      <Socials />
    </HeaderWrapper>
  );
};

export default Header;
