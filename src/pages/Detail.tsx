import {useParams} from 'react-router-dom';
import {Page} from '../components/Page';
import React from "react";
import {BackButton} from "../components/buttons/BackButton";
import {PageDividerWrapper} from "../components/PageDivider.styled";
import {Description} from "../components/detail/description/Description";
import {Splash} from "../components/splash/Splash";
import Header from "../components/header/Header";
import useFetchTopic from "../hooks/sections/useFetchTopic";

export const Detail = () => {
    const {detailId = '0'} = useParams();
    const {data: topic, isLoading} = useFetchTopic(parseInt(detailId));

    return (
        isLoading ? <p>Loading</p> :
            <Page>
                <Header/>
                <Splash sectionBgColor={topic!.bgColor} title={topic!.title}/>
                <Description description={topic!.description}/>
                <PageDividerWrapper/>
                {/*<MoreContents data={topics} canReplace={true} />*/}
                <BackButton/>
            </Page>
    );
};
