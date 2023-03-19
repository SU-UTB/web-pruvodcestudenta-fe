/*
TODO will be handled differently
Used only because of missing api
*/

import {createContext} from 'react';
import {ITile} from "../components/tiles/Tile";

const defaultVal: ITile[] = [];
export const SectionsContext = createContext(defaultVal);