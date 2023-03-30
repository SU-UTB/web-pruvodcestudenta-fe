import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/buttons/BackButton';
import { MoreContents } from '../components/contents/MoreContents';
import Header from '../components/header/Header';
import { Page } from '../components/Page';
import { PageDividerWrapper } from '../components/PageDivider.styled';
import { Description } from '../components/section/description/Description';
import { Splash } from '../components/splash/Splash';
import { SectionsContext } from '../contexts/SectionsContext';
import { TopicsContext } from '../contexts/TopicsContext';

export const Section = () => {
  const { id } = useParams();
  const sections = useContext(SectionsContext);
  const topics = useContext(TopicsContext);
  const section = sections.find((s) => s.link === id);

  return (
    <Page>
      <Header />
      <Splash sectionBgColor={section!.bgColor} title={section!.title} />
      <Description description={section!.description} />
      <PageDividerWrapper />
      <MoreContents data={topics} />
      <BackButton />
    </Page>
  );
};
