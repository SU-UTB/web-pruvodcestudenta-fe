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
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
  );

  return (
    <BaseLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && section && (
        <>
          <SectionSplash
            bgColor={section.color}
            bgImg={section.image}
            title={section.title}
          />
          <Description description={section.description} />
          <CardSlider contentCards={section.topics} prefix="detail" />
          <BackButton />
        </>
      )}
    </BaseLayout>
  );
};

export default Section;
