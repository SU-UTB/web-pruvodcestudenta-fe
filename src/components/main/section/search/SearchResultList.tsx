import useFetchSearchResults from '../../../../hooks/useFetchSearchResults';
import SearchResultItem from './SearchResultItem';
import { SearchResultListWrapper } from './SearchResultListWrapper.styled';

interface SearchResultListProps {
  searchTerm: string;
}

const SearchResultList = ({ searchTerm }: SearchResultListProps) => {
  const { isLoading, error, data: topics } = useFetchSearchResults(searchTerm);

  return (
    <SearchResultListWrapper>
      {error && <span>{error}</span>}
      {topics && topics.length === 0 && (
        <span>Hledaný výraz není v naší databáze</span>
      )}
      {topics &&
        topics.map(({ id, title }) => (
          <SearchResultItem key={id} id={id} title={title} />
        ))}
    </SearchResultListWrapper>
  );
};

export default SearchResultList;
