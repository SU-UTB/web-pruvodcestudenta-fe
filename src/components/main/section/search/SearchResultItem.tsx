import { IContent } from '../../../../lib/interfaces/IContent';

const SearchResultItem = ({
  title,
  slug,
  sectionSlug,
  color,
}: ISearchTopic) => {
  return <a href={`/${sectionSlug}/${slug}`}>{title}</a>;
};

export default SearchResultItem;
