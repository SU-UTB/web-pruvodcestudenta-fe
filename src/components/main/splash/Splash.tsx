import { CityPicker } from '../../cityPicker/CityPicker';
import { Divider } from '../../Divider.styled';
import { SplashH1 } from './SplashH1.styled';
import { SplashWrapper } from './SplashWrapper.styled';

export const Splash = () => (
  <SplashWrapper>
    <Divider height={127} />
    <SplashH1>Průvodce studenta splash screen</SplashH1>
    <Divider height={17} />
    <p>
      Průvodce studenta UTB ti rychle pomůže zorientovat se na nové vysoké
      škole.
    </p>
    <Divider height={67} />
    <CityPicker />
  </SplashWrapper>
);
