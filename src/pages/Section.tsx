import {Page} from "../components/Page";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import {Splash} from "../components/section/splash/Splash";
import {Description} from "../components/section/description/Description";
import {Contents} from "../components/section/contents/Contents";
import {BackButton} from "../components/buttons/BackButton";
import useFetchSections from "../hooks/useFetchSections";

export const Section = () => {
    const {id} = useParams();
    const {data: sections, isLoading, error} = useFetchSections();

    return (<Page>
        {isLoading ? <p>Nahrávám...</p>
            : <>
                <Header/>
                <Splash sectionBgColor={sections.find(s => s.link === id)!.bgColor}
                        title={sections.find(s => s.link === id)!.title}/>
                <Description description={sections.find(s => s.link === id)!.description}/>
                <Contents/>
                <BackButton/>
            </>}

    </Page>)
}