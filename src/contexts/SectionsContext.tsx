/*
TODO will be handled differently
Used only because of missing api
*/

import {createContext} from 'react';

interface ISection {
    title: string
    link: string,
    bgColor: string,
    description: string
}

const defaultVal: ISection[] = [];
export const SectionsContext = createContext(defaultVal);