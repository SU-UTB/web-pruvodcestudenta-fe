import { useParams } from 'react-router-dom';

import { BaseLayout } from '../components/layout/BaseLayout';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { SectionSplash } from '../components/section/splash/SectionSplash';
import { BackButton } from '../components/shared/buttons/BackButton';
import { CardSlider } from '../components/shared/cardSlider/CardSlider';
import { Description } from '../components/shared/description/Description';
import useFetchSection from '../hooks/section/useFetchSection';

const Section = () => {
  const { sectionSlug = '' } = useParams();
  const { data: section, isLoading } = useFetchSection(sectionSlug);

  const sortedTopics = section?.topics.sort((a, b) =>
    a.title > b.title ? 1 : -1,
  );

  return (
    <BaseLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && section && (
        <>
          <SectionSplash sectionBgColor={section.color} title={section.title} />
          <Description description={section.description} />
          <CardSlider contentCards={sortedTopics} />
          <BackButton />
        </>
      )}
    </BaseLayout>
  );
};

export default Section;
