import Header from "../components/Header";
import {Splash} from "../components/main/splash/Splash";
import {SearchSection} from "../components/main/search/SearchSection";
import {PageDivider} from "../components/PageDivider";
import {Page} from "../components/Page";
import {PresetsSection} from "../components/main/presets/PresetsSection";
import {RectorSection} from "../components/main/rector/RectorSection";
import useFetchSections from "../hooks/useFetchSections";

const Main = () => {
    const {data: sections, isLoading, error} = useFetchSections();

    return (
        <Page>
            {isLoading && <p>Nahrávám...</p>}
            <>
                <Header/>
                <Splash/>
                <SearchSection/>
                <PageDivider/>
                <PresetsSection sections={sections}/>
                <PageDivider/>
                <RectorSection/>
                {/*
            <Footer/>
*/}</>
        </Page>
    );
};

export default Main;
