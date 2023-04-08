import {useParams} from 'react-router-dom';

import {BackButton} from '../components/buttons/BackButton';
import {MoreContents} from '../components/contents/MoreContents';
import Header from '../components/header/Header';
import {Page} from '../components/Page';
import {Description} from '../components/section/description/Description';
import {Splash} from '../components/splash/Splash';
import useFetchSection from "../hooks/sections/useFetchSection";

export const Section = () => {
    const {id = '0'} = useParams();
    const {data: section, isLoading} = useFetchSection(parseInt(id));

    return (
        isLoading ? <p>Loading</p> :
            <Page>
                <Header/>
                <Splash sectionBgColor={section!.bgColor} title={section!.title}/>
                <Description description={section!.description}/>
                <MoreContents data={section!.topics}/>
                <BackButton/>
            </Page>
    );
};
