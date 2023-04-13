import { useMemo, useState } from 'react';
import { normalizeText } from '../../../utils/normalizeText';
import SearchButton from './SearchButton';
import { SearchInput } from './SearchInput.styled';
import { SearchInputForm } from './SearchInputForm.styled';
import { SearchSectionWrapper } from './SearchSectionWrapper.styled';
import FilterButton from './filter/FilterButton';
import { SearchTags } from './tags/SearchTags';

const pickedTags = [
  'Univerzitní svět',
  'Život ve Zlíně',
  'Technické záležitosti',
  'Univerzitní služby',
  'Praktické rady',
  'Další...',
];

export const SearchSection = () => {
  const [tags] = useState<string[]>(pickedTags);
  const [query, setQuery] = useState<string>('');

  const filteredTags = useMemo(() => {
    return tags.filter((tag) => {
      return normalizeText(tag).includes(normalizeText(query));
    });
  }, [tags, query]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle submit action if any
  };

  return (
    <SearchSectionWrapper>
      <FilterButton />
      <SearchInputForm onSubmit={handleSubmit}>
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Hledat"
        />
        <SearchButton />
      </SearchInputForm>
      <SearchTags pickedTags={filteredTags} />
    </SearchSectionWrapper>
  );
};
