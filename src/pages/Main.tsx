import { BaseLayout } from '../components/layout/BaseLayout';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import { RectorSection } from '../components/main/rector/RectorSection';
import { SectionWrapper } from '../components/main/section/SectionWrapper';
import { Splash } from '../components/main/splash/Splash';
import useFetchLanding from '../hooks/useFetchLanding';

const Main = () => {
  const { isLoading } = useFetchLanding();

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
