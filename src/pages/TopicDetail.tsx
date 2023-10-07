import { useParams } from 'react-router-dom';
import { BaseLayout } from '../components/layout/BaseLayout';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { SectionSplash } from '../components/section/splash/SectionSplash';
import { BackButton } from '../components/shared/buttons/BackButton';
import { Description } from '../components/shared/description/Description';
import { LocationMap } from '../components/topic/LocationMap';
import useFetchTopic from '../hooks/section/useFetchTopic';

const TopicDetail = () => {
  const { topicSlug = '' } = useParams();
  const { data: topic, isLoading } = useFetchTopic(topicSlug);

  return (
    <BaseLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && topic && (
        <>
          <SectionSplash
            bgColor={topic.color}
            bgImg={topic.image}
            title={topic.title}
          />
          <Description description={topic.description} />
          {topic.location && <LocationMap location={topic.location} />}
          <BackButton />
        </>
      )}
    </BaseLayout>
  );
};

export default TopicDetail;
