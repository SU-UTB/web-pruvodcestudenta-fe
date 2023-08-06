import { useParams } from 'react-router-dom';
import { Description } from '../components/detail/description/Description';
import { BaseLayout } from '../components/layout/BaseLayout';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { SectionSplash } from '../components/section/splash/SectionSplash';
import { BackButton } from '../components/shared/buttons/BackButton';
import useFetchTopic from '../hooks/section/useFetchTopic';

const TopicDetail = () => {
  const { detailId = '0' } = useParams();
  const { data: topic, isLoading } = useFetchTopic(parseInt(detailId));

  return (
    <BaseLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && topic && (
        <>
          <SectionSplash sectionBgColor={topic.color} title={topic.title} />
          <Description description={topic.description} />
          <BackButton />
        </>
      )}
    </BaseLayout>
  );
};

export default TopicDetail;
