import { CityPicker } from '../../cityPicker/CityPicker';
import { SplashH1 } from './SplashH1.styled';
import { SplashWrapper } from './SplashWrapper.styled';

export const Splash = () => (
  <SplashWrapper>
    <SplashH1>Průvodce studenta</SplashH1>
    <p>
      Průvodce studenta UTB ti rychle pomůže zorientovat se na nové vysoké
      škole.
    </p>
    <CityPicker />
  </SplashWrapper>
);
