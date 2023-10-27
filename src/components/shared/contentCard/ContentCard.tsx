import {
  ContentCardHeadline,
  ContentCardImg,
  ContentCardWrapper,
  StyledLink,
} from './ContentCard.styled';

export interface IContentCardProps {
  slug: string;
  title: string;
  canReplace?: boolean;
  color?: string;
  width?: number;
  icon?: string;
}

export const ContentCard = ({
  slug,
  title,
  canReplace,
  color,
  width,
  icon,
}: IContentCardProps) => {
  return (
    <StyledLink to={`${slug}`} replace={canReplace}>
      <ContentCardWrapper width={width} bgColor={color}>
        {icon && (
          <ContentCardImg src={icon} alt={title} width={130} height={100} />
        )}
        <ContentCardHeadline>{title}</ContentCardHeadline>
      </ContentCardWrapper>
    </StyledLink>
  );
};
