import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/buttons/BackButton';
import { MoreContents } from '../components/contents/MoreContents';
import { Description } from '../components/detail/description/Description';
import Header from '../components/Header';
import { Page } from '../components/Page';
import { PageDividerWrapper } from '../components/PageDivider.styled';
import { Splash } from '../components/splash/Splash';
import { TopicsContext } from '../contexts/TopicsContext';

export const Detail = () => {
  const { detail } = useParams();
  const topics = useContext(TopicsContext);
  const topic = topics.find((s) => s.link === detail);

  return (
    <Page>
      <Header />
      <Splash sectionBgColor={topic!.bgColor} title={topic!.title} />
      <Description description={topic!.description} />
      <PageDividerWrapper />
      <MoreContents data={topics} canReplace={true} />
      <BackButton />
    </Page>
  );
};
