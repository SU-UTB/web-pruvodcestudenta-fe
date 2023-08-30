import useFetchSearchResults from '../../../../hooks/useFetchSearchResults';
import { SearchErrorItemStyled } from './SearchErrorItemStyled.styled';
import SearchResultItem from './SearchResultItem';
import { SearchResultListWrapper } from './SearchResultListWrapper.styled';

interface SearchResultListProps {
  searchTerm: string;
}

const SearchResultList = ({ searchTerm }: SearchResultListProps) => {
  const { isLoading, error, data: topics } = useFetchSearchResults(searchTerm);

  return (
    <SearchResultListWrapper>
      {error && <SearchErrorItemStyled>{error}</SearchErrorItemStyled>}
      {topics && topics.length === 0 && (
        <SearchErrorItemStyled>
          Hledaný výraz není v naší databáze
        </SearchErrorItemStyled>
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
