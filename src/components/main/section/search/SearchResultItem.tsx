import { SearchResultItemStyled } from './SearchResultItemStyled.styled';

const SearchResultItem = ({
  title,
  slug,
  sectionSlug,
  color,
}: ISearchTopic) => {
  return (
    <SearchResultItemStyled href={`/${sectionSlug}/${slug}`}>
      {title}
    </SearchResultItemStyled>
  );
};

export default SearchResultItem;
