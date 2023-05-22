/*
TODO will be handled differently
Used only because of missing api
*/

import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { IGuideCategory } from '../lib/interfaces/IGuideCategory';

type IGuideCategoryContext = [
  IGuideCategory[],
  Dispatch<SetStateAction<IGuideCategory[]>>,
];

export const GuideCategoryListContext = createContext<IGuideCategoryContext>([
  [],
  () => {},
]);

export const GuideCategoryListProvider = ({ children }: { children: any }) => {
  const [state, setState] = useState<IGuideCategory[]>([]);

  return (
    <GuideCategoryListContext.Provider value={[state, setState]}>
      {children}
    </GuideCategoryListContext.Provider>
  );
};
