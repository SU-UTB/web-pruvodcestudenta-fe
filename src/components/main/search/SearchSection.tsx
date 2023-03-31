import { Divider } from '../../Divider.styled';
import { SearchInput } from './SearchInput.styled';
import { SearchSectionWrapper } from './SearchSectionWrapper.styled';
import { SearchTags } from './tags/SearchTags';

export const SearchSection = () => (
  <SearchSectionWrapper>
    <Divider height={47} />
    <SearchInput placeholder={'Hledat'}></SearchInput>
    <SearchTags />
    <Divider height={47} />
  </SearchSectionWrapper>
);
