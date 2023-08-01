import { Tag } from './Tag.styled';
import { TagsWrapperStyled } from './TagsWrapper.styled';

interface SearchTagsProps {
  pickedTags: string[];
}

export const TagsWrapper = ({ pickedTags }: SearchTagsProps) => (
  <TagsWrapperStyled>
    {pickedTags.map((tag, index) => (
      <Tag key={index.toString()}>{tag}</Tag>
    ))}
  </TagsWrapperStyled>
);
