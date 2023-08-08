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
        topics.map(({ title, slug, sectionSlug, color }) => (
          <SearchResultItem
            key={slug}
            title={title}
            slug={slug}
            sectionSlug={sectionSlug}
            color={color}
          />
        ))}
    </SearchResultListWrapper>
  );
};

export default SearchResultList;
