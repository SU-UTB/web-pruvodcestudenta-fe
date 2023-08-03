import { useParams } from 'react-router-dom';

import { BackButton } from '../components/shared/buttons/BackButton';
import { BaseLayout } from '../components/layout/BaseLayout';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { Description } from '../components/section/description/Description';
import { Splash } from '../components/splash/Splash';
import useFetchSection from '../hooks/section/useFetchSection';
import { TopicsWrapper } from '../components/section/topics/TopicsWrapper';

const Section = () => {
  const { id = '0' } = useParams();
  const { data: section, isLoading } = useFetchSection(parseInt(id));

  return (
    <BaseLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && section && (
        <>
          <Splash sectionBgColor={section.color} title={section.title} />
          <Description description={section.description} />
          <TopicsWrapper topics={section.topics} />
          <BackButton />
        </>
      )}
    </BaseLayout>
  );
};

export default Section;
