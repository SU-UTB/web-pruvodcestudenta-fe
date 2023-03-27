import styled from 'styled-components';
import utb from '../assets/icons/utb.svg';
import {Socials} from "./Socials";
import {useNavigate} from "react-router-dom";

const AppName = "Průvodce studenta";

const HeaderWrapper = styled.header
    `
      height: 60px;
      width: 100vw;
      background-color: white;
      display: flex;
      align-items: center;
    `
const HeaderItem = styled.a`
  text-decoration: none;
  margin-right: 60px;
  color: black;
`

const AppLogoImage = styled.img`
  margin-right: 30px;
`;

interface IHeaderItem {
    title: string;
    link: string;

}

const HeaderItems: Array<IHeaderItem> = [
    {title: "UTB.cz", link: "https://www.utb.cz"},
    {title: "Aplikace UTB", link: "https://play.google.com/store/apps/details?id=cz.unizone.utb&hl=cs&gl=US"},
];

const AppLogo = styled.div`
  margin-right: auto;
  margin-left: 60px;
  display: flex;
  cursor: pointer;
`

const Header = () => {
    const navigate = useNavigate();
    return <HeaderWrapper>
        <AppLogo onClick={() => navigate('/')}>
            <AppLogoImage src={utb} alt='utb_logo'/>
            {AppName}
        </AppLogo>
        {HeaderItems.map(i => <HeaderItem key={i.title} href={i.link}>{i.title}</HeaderItem>)}
        <Socials/>
    </HeaderWrapper>;
};

export default Header;
  