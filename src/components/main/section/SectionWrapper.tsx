import { useContext } from 'react';

import { SectionListContext } from '../../../contexts/SectionListContext';
import { SectionWrapperStyled } from './SectionWrapper.styled';
import { SearchSection } from './search/SearchSection';
import { SectionList } from './sectionList/SectionList';

export const SectionWrapper = () => {
  const [sectionList] = useContext(SectionListContext);

  const sortedSectionList = sectionList.sort((a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
  );

  return (
    <SectionWrapperStyled>
      <SearchSection />
      <SectionList sectionList={sortedSectionList} />
    </SectionWrapperStyled>
  );
};
