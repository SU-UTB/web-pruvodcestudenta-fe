import { useContext, useMemo, useState } from 'react';
import { SectionsContext } from '../../../contexts/SectionsContext';
import { normalizeText } from '../../../utils/normalizeText';
import { GuideCategorySection } from './guideCategoryList/GuideCategorySection';
import { SearchSection } from './search/SearchSection';

const GuideSection = () => {
  const [query, setQuery] = useState<string>('');
  const [guideCategoryList] = useContext(SectionsContext);

  const filteredGuideCategoryList = useMemo(() => {
    return guideCategoryList.filter((guideCategory) => {
      return normalizeText(guideCategory.title).includes(normalizeText(query));
    });
  }, [guideCategoryList, query]);

  return (
    <>
      <SearchSection
        value={query}
        setValue={setQuery}
        handleSubmit={() => {}}
      />
      <GuideCategorySection sections={filteredGuideCategoryList} />
    </>
  );
};

export default GuideSection;
