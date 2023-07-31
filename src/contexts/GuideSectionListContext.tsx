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
import { IGuideSection } from '../lib/interfaces/IGuideSection';

type IGuideSectionContext = [
  IGuideSection[],
  Dispatch<SetStateAction<IGuideSection[]>>,
];

export const GuideSectionListContext = createContext<IGuideSectionContext>([
  [],
  () => {},
]);

export const GuideSectionListProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState<IGuideSection[]>([]);

  return (
    <GuideSectionListContext.Provider value={[state, setState]}>
      {children}
    </GuideSectionListContext.Provider>
  );
};
