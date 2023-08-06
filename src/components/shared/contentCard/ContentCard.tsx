import {
  ContentCardHeadline,
  ContentCardWrapper,
  StyledLink,
} from './ContentCard.styled';

export interface IContentCardProps {
  prefix: string;
  id: number;
  title: string;
  canReplace?: boolean;
  color?: string;
  width?: number;
}

export const ContentCard = ({
  prefix,
  title,
  id,
  canReplace,
  color,
  width,
}: IContentCardProps) => {
  return (
    <StyledLink to={`${prefix}/${id}`} replace={canReplace}>
      <ContentCardWrapper width={width} bgColor={color}>
        <ContentCardHeadline>{title}</ContentCardHeadline>
      </ContentCardWrapper>
    </StyledLink>
  );
};
