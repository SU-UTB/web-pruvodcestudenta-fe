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
}

export const ContentCard = ({
  slug,
  title,
  canReplace,
  color,
  width,
  image,
}: IContentCardProps) => {
  return (
    <StyledLink to={`${slug}`} replace={canReplace}>
      <ContentCardWrapper width={width}>
        <ContentCardBgIcon bgColor={color}>
          {image && <img src={image} alt={title} width={130} height={100} />}
        </ContentCardBgIcon>
        <ContentCardHeadline>{title}</ContentCardHeadline>
      </ContentCardWrapper>
    </StyledLink>
  );
};
