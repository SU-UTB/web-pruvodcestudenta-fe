/*
TODO will be handled differently
Used only because of missing api
*/

import {createContext, Dispatch, SetStateAction, useState} from 'react';
import {ISection} from "../interfaces/ISection";

type ISections = {
    sections: ISection[]
}
type ISectionsContext = [ISections, Dispatch<SetStateAction<ISections>>];


export const SectionsContext = createContext<ISectionsContext>([{sections: []}, () => {
}]);

export const SectionsProvider = ({children}: { children: any }) => {
    const [state, setState] = useState<ISections>({
        sections: [],
    });

    return <SectionsContext.Provider value={[state, setState]}>{children}</SectionsContext.Provider>;
};
