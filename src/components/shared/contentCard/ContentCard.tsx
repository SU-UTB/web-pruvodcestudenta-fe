import {
  ContentCardBgIcon,
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
      <ContentCardWrapper width={width}>
        <ContentCardBgIcon bgColor={color}>
          {icon && <img src={icon} alt={title} width={130} height={100} />}
        </ContentCardBgIcon>
        <ContentCardHeadline>{title}</ContentCardHeadline>
      </ContentCardWrapper>
    </StyledLink>
  );
};
