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
  bgColor?: string;
}

export const GuideCard = ({
  prefix,
  title,
  id,
  canReplace,
  bgColor,
}: IGuideCard) => {
  return (
    //TODO replace?
    <StyledLink to={`${prefix}/${id}`} replace={canReplace}>
      <GuideCardWrapper bgColor={bgColor}>
        <GuideCardHeadline>{title}</GuideCardHeadline>
      </GuideCardWrapper>
    </StyledLink>
  );
};
