import {Page} from "../components/Page";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import {Splash} from "../components/splash/Splash";
import {useContext} from "react";
import {SectionsContext} from "../contexts/SectionsContext";
import {Description} from "../components/section/description/Description";
import {MoreContents} from "../components/contents/MoreContents";
import {BackButton} from "../components/buttons/BackButton";
import {TopicsContext} from "../contexts/TopicsContext";
import {PageDivider} from "../components/PageDivider";

export const Section = () => {
    const {id} = useParams();
    const sections = useContext(SectionsContext);
    const topics = useContext(TopicsContext);
    const section = sections.find(s => s.link === id);


    return (<Page>
        <Header/>
        <Splash sectionBgColor={section!.bgColor} title={section!.title}/>
        <Description description={section!.description}/>
        <PageDivider/>
        <MoreContents data={topics}/>
        <BackButton/>
    </Page>)
}