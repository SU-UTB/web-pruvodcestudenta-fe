import {Page} from "../components/Page";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import {Splash} from "../components/splash/Splash";
import {useContext} from "react";
import {Description} from "../components/detail/description/Description";
import {MoreContents} from "../components/contents/MoreContents";
import {BackButton} from "../components/buttons/BackButton";
import {TopicsContext} from "../contexts/TopicsContext";
import {PageDivider} from "../components/PageDivider";

export const Detail = () => {
    const {detail} = useParams();
    const topics = useContext(TopicsContext);
    const topic = topics.find(s => s.link === detail);


    return (<Page>
        <Header/>
        <Splash sectionBgColor={topic!.bgColor} title={topic!.title}/>
        <Description description={topic!.description}/>
        <PageDivider/>
        <MoreContents data={topics} canReplace={true}/>
        <BackButton/>
    </Page>)
}