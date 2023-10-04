import { MainTitle } from '../../shared/titles/MainTitle.styled';
import { SectionSplashWrapper } from './SectionSplashWrapper.styled';

interface ISplash {
  bgColor: string;
  title: string;
  bgImg?: string;
}

export const SectionSplash = ({ bgColor, bgImg, title }: ISplash) => {
  return (
    <SectionSplashWrapper bgColor={bgColor} bgImg={bgImg}>
      <MainTitle>{title}</MainTitle>
    </SectionSplashWrapper>
  );
};
