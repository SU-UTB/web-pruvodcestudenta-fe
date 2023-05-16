import { Link } from 'react-router-dom';
import { Wrapper } from './GuideCategoryCard.styled';
import { CardParagraph } from './GuideCategoryCardParagraph.styled';

export interface IGuideCategoryCard {
  prefix: string;
  id: number;
  title: string;
  canReplace?: boolean;
}

export const GuideCategoryCard = ({
  prefix,
  title,
  id,
  canReplace,
}: IGuideCategoryCard) => {
  return (
    //TODO replace?
    <Link to={`${prefix}/${id}`} replace={canReplace}>
      <Wrapper>
        <CardParagraph>{title}</CardParagraph>
      </Wrapper>
    </Link>
  );
};
