import { SearchTag } from './SearchTag.styled';
import { SearchTagsWrapper } from './SearchTagsWrapper.styled';

const PickedTags = [
  'Univerzitní svět',
  'Život ve Zlíně',
  'Technické záležitosti',
  'Univerzitní služby',
  '"Praktické rady"',
  'Další...',
];

export const SearchTags = () => (
  <SearchTagsWrapper>
    {PickedTags.map((t, i) => (
      <SearchTag key={i.toString()}>{t}</SearchTag>
    ))}
  </SearchTagsWrapper>
);
