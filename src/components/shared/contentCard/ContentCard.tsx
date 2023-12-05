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
  image?: string;
  icon?: string;
}

export const ContentCard = ({
  slug,
  title,
  canReplace,
  color,
  width,
  image,
  icon,
}: IContentCardProps) => {
  const src = image || icon;
  return (
    <StyledLink to={`${slug}`} replace={canReplace}>
      <ContentCardWrapper width={width}>
        <ContentCardBgIcon bgColor={color}>
          {src && <img src={src} alt={title} loading="lazy" />}
        </ContentCardBgIcon>
        <ContentCardHeadline>
          <h4>{title}</h4>
        </ContentCardHeadline>
      </ContentCardWrapper>
    </StyledLink>
  );
};
