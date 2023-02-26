import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Splash} from "../components/Splash";
import {SearchSection} from "../components/SearchSection";

const Main = () => {
    return (
        <>
            <Header/>
            <Splash/>
            <SearchSection/>
            <Footer/>
        </>
    );
};

export default Main;
