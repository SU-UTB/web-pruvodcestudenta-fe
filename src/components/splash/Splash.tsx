import { MainTitle } from '../shared/titles/MainTitle.styled';
import { SplashWrapper } from './SplashWrapper.styled';

interface ISplash {
  sectionBgColor: string;
  title: string;
}

export const Splash = ({ sectionBgColor, title }: ISplash) => {
  return (
    <SplashWrapper backgroundColor={sectionBgColor}>
      <MainTitle>{title}</MainTitle>
    </SplashWrapper>
  );
};
