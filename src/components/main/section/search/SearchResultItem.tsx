import { IContent } from '../../../../lib/interfaces/IContent';

type SearchResultItemProps = Pick<IContent, 'id' | 'title'>;

const SearchResultItem = ({ id, title }: SearchResultItemProps) => {
  return <a href={`detail/${id}`}>{title}</a>;
};

export default SearchResultItem;
