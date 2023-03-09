import React from "react";
import Header from "../components/Header";
import {Splash} from "../components/Splash";
import {SearchSection} from "../components/SearchSection";
import {PageDivider} from "../components/PageDivider";
import {Page} from "../components/Page";

const Main = () => {
    return (
        <Page>
            <Header/>
            <Splash/>
            <SearchSection/>
            <PageDivider/>
            {/*
            <Footer/>
*/}
        </Page>
    );
};

export default Main;
