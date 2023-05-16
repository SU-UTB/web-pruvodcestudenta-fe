import { SearchTag } from './SearchTag.styled';
import { SearchTagsWrapper } from './SearchTagsWrapper.styled';

interface SearchTagsProps {
  pickedTags: string[];
}

export const SearchTags = ({ pickedTags }: SearchTagsProps) => (
  <SearchTagsWrapper>
    {pickedTags.map((tag, index) => (
      <SearchTag key={index.toString()}>{tag}</SearchTag>
    ))}
  </SearchTagsWrapper>
);
