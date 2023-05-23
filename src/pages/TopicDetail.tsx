import { useParams } from 'react-router-dom';
import { BackButton } from '../components/buttons/BackButton';
import { Description } from '../components/detail/description/Description';
import { BaseLayout } from '../components/layout/BaseLayout';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { Splash } from '../components/splash/Splash';
import useFetchTopic from '../hooks/guideCategory/useFetchTopic';

const TopicDetail = () => {
  const { detailId = '0' } = useParams();
  const { data: topic, isLoading } = useFetchTopic(parseInt(detailId));

  return (
    <BaseLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <Splash sectionBgColor={topic!.bgColor} title={topic!.title} />
          <Description description={topic!.description} />
          {/*<MoreContents data={topics} canReplace={true} />*/}
          <BackButton />
        </>
      )}
    </BaseLayout>
  );
};

export default TopicDetail;
