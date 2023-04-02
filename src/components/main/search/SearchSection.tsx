import { SearchInput } from './SearchInput.styled';
import { SearchSectionWrapper } from './SearchSectionWrapper.styled';
import { SearchTags } from './tags/SearchTags';

export const SearchSection = () => (
  <SearchSectionWrapper>
    <SearchInput placeholder={'Hledat'}></SearchInput>
    <SearchTags />
  </SearchSectionWrapper>
);
