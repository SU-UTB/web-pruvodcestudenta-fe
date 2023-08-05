import { useContext, useState } from 'react';

import { SectionListContext } from '../../../contexts/SectionListContext';
import { SectionWrapperStyled } from './SectionWrapper.styled';
import { SearchSection } from './search/SearchSection';
import { SectionList } from './sectionList/SectionList';

export const SectionWrapper = () => {
  const [query, setQuery] = useState<string>('');
  const [sectionList] = useContext(SectionListContext);

  return (
    <SectionWrapperStyled>
      <SearchSection
        value={query}
        setValue={setQuery}
        handleSubmit={() => {}}
      />
      <SectionList sectionList={sectionList} />
    </SectionWrapperStyled>
  );
};
