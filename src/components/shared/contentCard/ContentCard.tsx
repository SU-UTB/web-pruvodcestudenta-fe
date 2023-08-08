import {
  ContentCardHeadline,
  ContentCardWrapper,
  StyledLink,
} from './ContentCard.styled';

export interface IContentCardProps {
  slug: string;
  title: string;
  canReplace?: boolean;
  color?: string;
  width?: number;
}

export const ContentCard = ({
  slug,
  title,
  canReplace,
  color,
  width,
}: IContentCardProps) => {
  return (
    <StyledLink to={`${slug}`} replace={canReplace}>
      <ContentCardWrapper width={width} bgColor={color}>
        <ContentCardHeadline>{title}</ContentCardHeadline>
      </ContentCardWrapper>
    </StyledLink>
  );
};
