import useFetchSearchResults from '../../../../hooks/useFetchSearchResults';

interface SearchResultListProps {
  searchTerm: string;
}

const SearchResultList = ({ searchTerm }: SearchResultListProps) => {
  const { isLoading, error, data } = useFetchSearchResults(searchTerm);

  return (
    <div>
      {isLoading && <span>loading...</span>}
      {error && <span>{error}</span>}
      {JSON.stringify(data)}
    </div>
  );
};

export default SearchResultList;
