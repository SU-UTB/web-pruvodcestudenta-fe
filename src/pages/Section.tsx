import {Page} from "../components/Page";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import {Splash} from "../components/section/splash/Splash";
import {useContext} from "react";
import {SectionsContext} from "../contexts/SectionsContext";

export const Section = () => {
    const {id} = useParams();
    const sections = useContext(SectionsContext);
    const section = sections.find(s => s.link === id);


    return (<Page>
        <Header/>
        <Splash sectionBgColor={section!.bgColor} title={section!.title}/>
    </Page>)
}