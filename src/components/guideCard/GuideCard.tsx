import {
  GuideCardHeadline,
  GuideCardWrapper,
  StyledLink,
} from './GuideCard.styled';

export interface IGuideCard {
  prefix: string;
  id: number;
  title: string;
  canReplace?: boolean;
}

export const GuideCard = ({ prefix, title, id, canReplace }: IGuideCard) => {
  return (
    //TODO replace?
    <StyledLink to={`${prefix}/${id}`} replace={canReplace}>
      <GuideCardWrapper>
        <GuideCardHeadline>{title}</GuideCardHeadline>
      </GuideCardWrapper>
    </StyledLink>
  );
};
