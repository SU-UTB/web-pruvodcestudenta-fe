/*
TODO will be handled differently
Used only because of missing api
*/

import {createContext} from 'react';
import {IContent} from "../components/contents/MoreContents";

interface ISection extends IContent {
}

export const PresetSectionsData: ISection[] = [
    {
        link: "prakticke-rady",
        title: "Praktické rady",
        bgColor: "#FDA6A4",
        description: "Něco random o tom jaké systémy, věci, lifehacky na univerzitě provozujeme, něco jakoby možná vlastně smysluplného a zajímavého co tu nebude 2x nakopírované aby to bylo dost dlouhé."
    }, {
        link: "prakticke-rady",
        title: "Praktické rady",
        bgColor: "#FDA6A4",
        description: "Něco random o tom jaké systémy, věci, lifehacky na univerzitě provozujeme, něco jakoby možná vlastně smysluplného a zajímavého co tu nebude 2x nakopírované aby to bylo dost dlouhé."
    }, {
        link: "prakticke-rady",
        title: "Praktické rady",
        bgColor: "#FDA6A4",
        description: "Něco random o tom jaké systémy, věci, lifehacky na univerzitě provozujeme, něco jakoby možná vlastně smysluplného a zajímavého co tu nebude 2x nakopírované aby to bylo dost dlouhé."
    }
];

const defaultVal: ISection[] = [];
export const SectionsContext = createContext(defaultVal);