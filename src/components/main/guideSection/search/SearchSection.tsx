import { SearchInput } from './SearchInput.styled';
import { SearchInputForm } from './SearchInputForm.styled';
import { SearchWrapper } from './SearchSectionWrapper.styled';
import FilterButton from './filterButton/FilterButton';
import SearchButton from './searchButton/SearchButton';

const pickedTags = [
  'Univerzitní svět',
  'Život ve Zlíně',
  'Technické záležitosti',
  'Univerzitní služby',
  'Praktické rady',
  'Další...',
];

interface Props {
  handleSubmit: () => void;
  value: string;
  setValue: (value: string) => void;
}

export const SearchSection = ({ value, setValue, handleSubmit }: Props) => {
  return (
    <SearchWrapper>
      <FilterButton />
      <SearchInputForm onSubmit={handleSubmit}>
        <SearchInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Hledat"
        />
        <SearchButton />
      </SearchInputForm>
      {/* TODO: Put searchtags into the filter (filter modal) */}
      {/* <SearchTags pickedTags={tags} /> */}
    </SearchWrapper>
  );
};
