import { SplashH6 } from './SplashH6.styled';
import { SplashWrapper } from './SplashWrapper.styled';

interface ISplash {
  sectionBgColor: string;
  title: string;
}

export const Splash = ({ sectionBgColor, title }: ISplash) => {
  return (
    <SplashWrapper backgroundColor={sectionBgColor}>
      <SplashH6>{title}</SplashH6>
    </SplashWrapper>
  );
};
