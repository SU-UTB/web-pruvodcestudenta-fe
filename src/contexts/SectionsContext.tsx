/*
TODO will be handled differently
Used only because of missing api
*/

import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ISection } from '../lib/interfaces/ISection';

type ISectionsContext = [ISection[], Dispatch<SetStateAction<ISection[]>>];

export const SectionsContext = createContext<ISectionsContext>([[], () => {}]);

export const SectionsProvider = ({ children }: { children: any }) => {
  const [state, setState] = useState<ISection[]>([]);

  return (
    <SectionsContext.Provider value={[state, setState]}>
      {children}
    </SectionsContext.Provider>
  );
};
