import { useContext, useMemo, useState } from 'react';

import { GuideSectionListContext } from '../../../contexts/GuideSectionListContext';
import { SECTION_LIST_LIMIT } from '../../../lib/constants';
import { normalizeText } from '../../../utils/normalizeText';
import { GuideSectionWrapper } from './GuideSection.styled';
import { GuideSectionList } from './guideSectionList/GuideSectionList';
import { SearchSection } from './search/SearchSection';
import ExpandSectionListButton from './guideSectionList/expandSectionListButton/ExpandSectionListButton';

const GuideSection = () => {
  const [query, setQuery] = useState<string>('');
  const [guideSectionList] = useContext(GuideSectionListContext);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredGuideSectionList = useMemo(() => {
    return guideSectionList
      .filter((guideSection) => {
        return normalizeText(guideSection.title).includes(normalizeText(query));
      })
      .splice(0, isExpanded ? SECTION_LIST_LIMIT + 5 : SECTION_LIST_LIMIT);
  }, [guideSectionList, query, isExpanded]);

  return (
    <GuideSectionWrapper>
      <SearchSection
        value={query}
        setValue={setQuery}
        handleSubmit={() => {}}
      />
      <GuideSectionList guideSectionList={filteredGuideSectionList} />
      {filteredGuideSectionList.length > 5 && (
        <ExpandSectionListButton
          setIsExpanded={setIsExpanded}
          isExpanded={isExpanded}
        />
      )}
    </GuideSectionWrapper>
  );
};

export default GuideSection;
