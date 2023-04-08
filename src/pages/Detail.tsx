import {useParams} from 'react-router-dom';
import {Page} from '../components/Page';

export const Detail = () => {
  const {detail} = useParams();
  const topic = null;

  return (
    <Page>
      {/*      <Header />
      <Splash sectionBgColor={topic!.bgColor} title={topic!.title} />
      <Description description={topic!.description} />
      <PageDividerWrapper />
      <MoreContents data={topics} canReplace={true} />
      <BackButton />*/}
    </Page>
  );
};
