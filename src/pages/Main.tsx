import Header from '../components/Header';
import { PresetsSection } from '../components/main/presets/PresetsSection';
import { RectorSection } from '../components/main/rector/RectorSection';
import { SearchSection } from '../components/main/search/SearchSection';
import { Splash } from '../components/main/splash/Splash';
import { Page } from '../components/Page';
import { PageDividerWrapper } from '../components/PageDivider.styled';

const Main = () => {
  return (
    <Page>
      <Header />
      <Splash />
      <SearchSection />
      <PageDividerWrapper />
      <PresetsSection />
      <PageDividerWrapper />
      <RectorSection />
      {/*
            <Footer/>
*/}
    </Page>
  );
};

export default Main;
