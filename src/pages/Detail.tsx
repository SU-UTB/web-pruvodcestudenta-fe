import { useParams } from 'react-router-dom';
import { Page } from '../components/Page';
import { BackButton } from '../components/buttons/BackButton';
import { Description } from '../components/detail/description/Description';
import Header from '../components/header/Header';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { Splash } from '../components/splash/Splash';
import useFetchTopic from '../hooks/sections/useFetchTopic';

export const Detail = () => {
  const { detailId = '0' } = useParams();
  const { data: topic, isLoading } = useFetchTopic(parseInt(detailId));

  return (
    <Page>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <Header />
          <Splash sectionBgColor={topic!.bgColor} title={topic!.title} />
          <Description description={topic!.description} />
          {/*<MoreContents data={topics} canReplace={true} />*/}
          <BackButton />
        </>
      )}
    </Page>
  );
};
