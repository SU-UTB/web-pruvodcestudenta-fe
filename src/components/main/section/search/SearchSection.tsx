import { useState } from 'react';

import useDebounce from '../../../../hooks/useDebounce';
import { SearchInput } from './SearchInput.styled';
import { SearchInputWrapper } from './SearchInputWrapper.styled';
import SearchResultList from './SearchResultList';
import { SearchWrapper } from './SearchSectionWrapper.styled';
import FilterButton from './filterButton/FilterButton';
import SearchButton from './searchButton/SearchButton';

export const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedValue = useDebounce(searchQuery.trim());

  return (
    <SearchWrapper>
      <FilterButton />
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
