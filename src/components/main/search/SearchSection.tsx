import SearchButton from './SearchButton';
import { SearchInput } from './SearchInput.styled';
import { SearchInputForm } from './SearchInputForm.styled';
import { SearchSectionWrapper } from './SearchSectionWrapper.styled';
import { SearchTags } from './tags/SearchTags';

export const SearchSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: handle submit action if any
  };

  return (
    <SearchSectionWrapper>
      <SearchInputForm onSubmit={handleSubmit}>
        <SearchInput type="text" placeholder="Hledat" />
        <SearchButton />
      </SearchInputForm>
      <SearchTags />
    </SearchSectionWrapper>
  );
};
