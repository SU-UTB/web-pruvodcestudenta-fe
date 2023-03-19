import {Page} from "../components/Page";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import {Splash} from "../components/splash/Splash";
import {useContext} from "react";
import {Description} from "../components/detail/description/Description";
import {Contents} from "../components/contents/Contents";
import {BackButton} from "../components/buttons/BackButton";
import {ContentsContext} from "../contexts/ContentsContext";

export const Detail = () => {
    const {detail} = useParams();
    const contents = useContext(ContentsContext);
    const content = contents.find(s => s.link === detail);


    return (<Page>
        <Header/>
        <Splash sectionBgColor={content!.bgColor} title={content!.title}/>
        <Description description={content!.description}/>
        <Contents/>
        <BackButton/>
    </Page>)
}