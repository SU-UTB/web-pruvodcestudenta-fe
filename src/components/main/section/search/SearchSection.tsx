import { useState } from 'react';

import useDebounce from '../../../../hooks/useDebounce';
import { SearchInput } from './SearchInput.styled';
import { SearchInputWrapper, SearchInputWrapper } from './SearchInputWrapper.styled';
import { default as SearchResultList, default as SearchResultList } from './SearchResultList';
import { SearchWrapper } from './SearchSectionWrapper.styled';
import SearchButton from './searchButton/SearchButton';

export const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedValue = useDebounce(searchQuery.trim());

export const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedValue = useDebounce(searchQuery.trim());

  return (
    <SearchWrapper>
      <SearchInputWrapper>
      <SearchInputWrapper>
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Hledat - například kafe, jídlo, ..."
          placeholder="Hledat - například kafe, jídlo, ..."
        />
        <SearchButton />
      </SearchInputWrapper>
      {debouncedValue && <SearchResultList searchTerm={debouncedValue} />}
      </SearchInputWrapper>
      {debouncedValue && <SearchResultList searchTerm={debouncedValue} />}
    </SearchWrapper>
  );
};
