import { useParams } from 'react-router-dom';

import { BackButton } from '../components/buttons/BackButton';
import { MoreContents } from '../components/contents/MoreContents';
import { BaseLayout } from '../components/layout/BaseLayout';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { Description } from '../components/section/description/Description';
import { Splash } from '../components/splash/Splash';
import useFetchSection from '../hooks/section/useFetchSection';

const Section = () => {
  const { id = '0' } = useParams();
  const { data: section, isLoading } = useFetchSection(parseInt(id));

  return (
    <BaseLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && section && (
        <>
          <Splash sectionBgColor={section.bg_color} title={section.title} />
          <Description description={section.description} />
          <MoreContents data={section.topics} />
          <BackButton />
        </>
      )}
    </BaseLayout>
  );
};

export default Section;
