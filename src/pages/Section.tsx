import {useParams} from 'react-router-dom';

import {BackButton} from '../components/buttons/BackButton';
import {MoreContents} from '../components/contents/MoreContents';
import Header from '../components/header/Header';
import {Page} from '../components/Page';
import {PageDividerWrapper} from '../components/PageDivider.styled';
import {Description} from '../components/section/description/Description';
import {Splash} from '../components/splash/Splash';
import {useContext} from "react";
import {SectionsContext} from "../contexts/SectionsContext";
import useFetchSection from "../hooks/sections/useFetchSection";

export const Section = () => {
    const {link} = useParams();
    const [sections] = useContext(SectionsContext);
    const {id} = sections.find(s => s.link === link) || sections[0];
    const {data: section, isLoading} = useFetchSection(id);

    return (
        isLoading ? <p>Loading</p> :
            <Page>
                <Header/>
                <Splash sectionBgColor={section!.bgColor} title={section!.title}/>
                <Description description={section!.description}/>
                <PageDividerWrapper/>
                <MoreContents data={section!.topics}/>
                <BackButton/>
            </Page>
    );
};
