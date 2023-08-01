import { BaseLayout } from '../components/layout/BaseLayout';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { SectionWrapper } from '../components/main/section/SectionWrapper';
import { RectorSection } from '../components/main/rector/RectorSection';
import { Splash } from '../components/main/splash/Splash';
import useFetchLanding from '../hooks/useFetchLanding';

const Main = () => {
  const { data: landing, isLoading } = useFetchLanding();

  return (
    <BaseLayout>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <Splash />
          <SectionWrapper />
          <RectorSection />
        </>
      )}
    </BaseLayout>
  );
};

export default Main;
