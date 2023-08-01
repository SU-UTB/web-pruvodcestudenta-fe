import { useContext, useMemo, useState } from 'react';

import { SectionListContext } from '../../../contexts/SectionListContext';
import { SECTION_LIST_LIMIT } from '../../../lib/constants';
import { normalizeText } from '../../../utils/normalizeText';
import { SectionWrapperStyled } from './SectionWrapper.styled';
import { SectionList } from './sectionList/SectionList';
import { SearchSection } from './search/SearchSection';
import ExpandSectionListButton from './sectionList/expandSectionListButton/ExpandSectionListButton';

export const SectionWrapper = () => {
  const [query, setQuery] = useState<string>('');
  const [sectionList] = useContext(SectionListContext);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredSectionList = useMemo(() => {
    return sectionList
      .filter((section) => {
        return normalizeText(section.title).includes(normalizeText(query));
      })
      .splice(0, isExpanded ? SECTION_LIST_LIMIT + 5 : SECTION_LIST_LIMIT);
  }, [sectionList, query, isExpanded]);

  return (
    <SectionWrapperStyled>
      <SearchSection
        value={query}
        setValue={setQuery}
        handleSubmit={() => { }}
      />
      <SectionList sectionList={filteredSectionList} />
      {filteredSectionList.length > 5 && (
        <ExpandSectionListButton
          setIsExpanded={setIsExpanded}
          isExpanded={isExpanded}
        />
      )}
    </SectionWrapperStyled>
  );
};
