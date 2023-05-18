import { Page } from '../components/Page';
import Header from '../components/header/Header';
import Footer from '../components/layout/footer/Footer';
import LoadingSpinner from '../components/loadingSpinner/LoadingSpinner';
import GuideSection from '../components/main/guideSection/GuideSection';
import { RectorSection } from '../components/main/rector/RectorSection';
import { Splash } from '../components/main/splash/Splash';
import useFetchLanding from '../hooks/useFetchLanding';

const Main = () => {
  const { data: landing, isLoading } = useFetchLanding();

  return (
    <Page>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <Header />
          <Splash />
          <GuideSection />
          <RectorSection />
          <Footer />
        </>
      )}
    </Page>
  );
};

export default Main;
