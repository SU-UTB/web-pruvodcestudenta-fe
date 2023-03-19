import {Page} from "../components/Page";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import {Splash} from "../components/section/splash/Splash";
import {useContext} from "react";
import {SectionsContext} from "../contexts/SectionsContext";
import {Description} from "../components/section/description/Description";
import {Contents} from "../components/section/contents/Contents";
import {BackButton} from "../components/buttons/BackButton";

export const Section = () => {
    const {id} = useParams();
    const sections = useContext(SectionsContext);
    const section = sections.find(s => s.link === id);


    return (<Page>
        <Header/>
        <Splash sectionBgColor={section!.bgColor} title={section!.title}/>
        <Description description={section!.description}/>
        <Contents/>
        <BackButton/>
    </Page>)
}