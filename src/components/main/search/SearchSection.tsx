import { SearchSectionWrapper } from './SearchSectionWrapper.styled';
import { SearchTags } from './tags/SearchTags';
import { SearchInput } from './SearchInput';
import { Divider } from '../../Divider';

export const SearchSection = () => (
  <SearchSectionWrapper>
    <Divider height={47} />
    <SearchInput placeholder={'Hledat'}></SearchInput>
    <SearchTags />
    <Divider height={47} />
  </SearchSectionWrapper>
);
