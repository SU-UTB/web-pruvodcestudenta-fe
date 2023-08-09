import { useContext } from 'react';

import { SectionListContext } from '../../../contexts/SectionListContext';
import { SectionWrapperStyled } from './SectionWrapper.styled';
import { SearchSection } from './search/SearchSection';
import { SectionList } from './sectionList/SectionList';

export const SectionWrapper = () => {
  const [sectionList] = useContext(SectionListContext);

  return (
    <SectionWrapperStyled>
      <SearchSection />
      <SectionList sectionList={sectionList} />
    </SectionWrapperStyled>
  );
};
