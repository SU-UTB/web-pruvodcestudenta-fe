import Header from '../components/header/Header';
import { PresetsSection } from '../components/main/presets/PresetsSection';
import { RectorSection } from '../components/main/rector/RectorSection';
import { SearchSection } from '../components/main/search/SearchSection';
import { Splash } from '../components/main/splash/Splash';
import { Page } from '../components/Page';
import useFetchLanding from '../hooks/useFetchLanding';

const Main = () => {
  const { data: landing, isLoading } = useFetchLanding();

  return isLoading ? (
    <p> Loading</p>
  ) : (
    <Page>
      <Header />
      <Splash />
      <SearchSection />
      <PresetsSection />
      <RectorSection />
      {/*
            <Footer/>
*/}
    </Page>
  );
};

export default Main;
