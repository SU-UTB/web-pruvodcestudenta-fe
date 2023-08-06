import { MainTitle } from '../../shared/titles/MainTitle.styled';
import { SectionSplashWrapper } from './SectionSplashWrapper.styled';

interface ISplash {
  sectionBgColor: string;
  title: string;
}

export const SectionSplash = ({ sectionBgColor, title }: ISplash) => {
  return (
    <SectionSplashWrapper backgroundColor={sectionBgColor}>
      <MainTitle>{title}</MainTitle>
    </SectionSplashWrapper>
  );
};
