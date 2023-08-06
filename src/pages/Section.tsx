import { useParams } from 'react-router-dom';

import { BaseLayout } from '../components/layout/BaseLayout';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { Description } from '../components/section/description/Description';
import { SectionSplash } from '../components/section/splash/SectionSplash';
import { BackButton } from '../components/shared/buttons/BackButton';
import { CardSlider } from '../components/shared/cardSlider/CardSlider';
import useFetchSection from '../hooks/section/useFetchSection';

const Section = () => {
  const { id = '0' } = useParams();
  const { data: section, isLoading } = useFetchSection(parseInt(id));

  return (
    <BaseLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && section && (
        <>
          <SectionSplash sectionBgColor={section.color} title={section.title} />
          <Description description={section.description} />
          <CardSlider contentCards={section.topics} prefix="detail" />
          <BackButton />
        </>
      )}
    </BaseLayout>
  );
};

export default Section;
