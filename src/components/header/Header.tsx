import { useNavigate } from 'react-router-dom';

import { Socials } from '../socials/Socials';
import { HeaderItems } from './Header.content';
import {
  AppLogo,
  HeaderItem,
  HeaderWrapper,
  LinksWrapper,
} from './Header.styled';

import utb from '../../assets/icons/utb.svg';

const AppName = 'Průvodce studenta';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <AppLogo onClick={() => navigate('/')}>
        <img src={utb} alt="utb_logo" />
        {AppName}
      </AppLogo>
      <LinksWrapper>
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
