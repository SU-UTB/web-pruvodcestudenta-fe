import { useContext, useMemo, useState } from 'react';
import { GuideCategoryListContext } from '../../../contexts/GuideCategoryListContext';
import { CATEGORY_LIST_LIMIT } from '../../../lib/constants';
import { normalizeText } from '../../../utils/normalizeText';
import { GuideSectionWrapper } from './GuideSection.styled';
import { GuideCategorySection } from './guideCategoryList/GuideCategorySection';
import ExpandCategoryListButton from './guideCategoryList/expandCategoryListButton/ExpandCategoryListButton';
import { SearchSection } from './search/SearchSection';

const GuideSection = () => {
  const [query, setQuery] = useState<string>('');
  const [guideCategoryList] = useContext(GuideCategoryListContext);
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
      <GuideCategorySection guideCategoryList={filteredGuideCategoryList} />
      {filteredGuideCategoryList.length > 5 && (
        <ExpandCategoryListButton
          setIsExpanded={setIsExpanded}
          isExpanded={isExpanded}
        />
      )}
    </GuideSectionWrapper>
  );
};

export default GuideSection;
