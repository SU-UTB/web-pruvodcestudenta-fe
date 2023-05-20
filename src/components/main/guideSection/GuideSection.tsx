import { useContext, useMemo, useState } from 'react';
import { SectionsContext } from '../../../contexts/SectionsContext';
import { CATEGORY_LIST_LIMIT } from '../../../lib/constants';
import { normalizeText } from '../../../utils/normalizeText';
import { GuideSectionWrapper } from './GuideSection.styled';
import { GuideCategorySection } from './guideCategoryList/GuideCategorySection';
import GuideCategoryShowMoreButton from './guideCategoryList/expandCategoryListButton/ExpandCategoryListButton';
import { SearchSection } from './search/SearchSection';

const GuideSection = () => {
  const [query, setQuery] = useState<string>('');
  const [guideCategoryList] = useContext(SectionsContext);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredGuideCategoryList = useMemo(() => {
    return guideCategoryList
      .filter((guideCategory) => {
        return normalizeText(guideCategory.title).includes(
          normalizeText(query),
        );
      })
      .splice(0, isExpanded ? CATEGORY_LIST_LIMIT + 5 : CATEGORY_LIST_LIMIT);
  }, [guideCategoryList, query, isExpanded]);

  return (
    <GuideSectionWrapper>
      <SearchSection
        value={query}
        setValue={setQuery}
        handleSubmit={() => {}}
      />
      <GuideCategorySection sections={filteredGuideCategoryList} />
      <GuideCategoryShowMoreButton
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
      />
    </GuideSectionWrapper>
  );
};

export default GuideSection;
