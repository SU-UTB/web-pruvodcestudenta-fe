import React from "react";
import Header from "../components/Header";
import {Splash} from "../components/Splash";
import {SearchSection} from "../components/SearchSection";
import {PageDivider} from "../components/PageDivider";
import {Page} from "../components/Page";
import {PresetsSection} from "../components/PresetsSection";
import {RectorSection} from "../components/RectorSection";

const Main = () => {
    return (
        <Page>
            <Header/>
            <Splash/>
            <SearchSection/>
            <PageDivider/>
            <PresetsSection/>
            <PageDivider/>
            <RectorSection/>
            {/*
            <Footer/>
*/}
        </Page>
    );
};

export default Main;
