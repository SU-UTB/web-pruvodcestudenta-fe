import { useState } from 'react';

import useDebounce from '../../../../hooks/useDebounce';
import { setIsFilterModalOpen } from '../../../../stores/FilterModalStore';
import { SearchInput } from './SearchInput.styled';
import { SearchInputWrapper } from './SearchInputWrapper.styled';
import SearchResultList from './SearchResultList';
import { SearchWrapper } from './SearchSectionWrapper.styled';
import FilterButton from './filterButton/FilterButton';
import FilterModal from './filterModal/FilterModal';
import SearchButton from './searchButton/SearchButton';

export const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedValue = useDebounce(searchQuery.trim());
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  return (
    <SearchWrapper>
      <FilterButton onClick={() => setIsFilterModalOpen(true)} />
      <FilterModal />
      <SearchInputWrapper>
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Hledat - například kafe, jídlo, ..."
        />
        <SearchButton />
      </SearchInputWrapper>
      {debouncedValue && <SearchResultList searchTerm={debouncedValue} />}
    </SearchWrapper>
  );
};
