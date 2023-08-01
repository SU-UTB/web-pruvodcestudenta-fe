/*
TODO will be handled differently
Used only because of missing api
*/

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { ISection } from '../lib/interfaces/ISection';

type ISectionContext = [
  ISection[],
  Dispatch<SetStateAction<ISection[]>>,
];

export const SectionListContext = createContext<ISectionContext>([
  [],
  () => { },
]);

export const SectionListProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState<ISection[]>([]);

  return (
    <SectionListContext.Provider value={[state, setState]}>
      {children}
    </SectionListContext.Provider>
  );
};
