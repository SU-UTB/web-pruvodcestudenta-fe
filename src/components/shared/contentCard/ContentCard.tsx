import { motion } from 'framer-motion';

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
}

export const ContentCard = ({
  prefix,
  title,
  id,
  canReplace,
  color,
}: IContentCardProps) => {
  return (
    <motion.div layout>
      <StyledLink to={`${prefix}/${id}`} replace={canReplace}>
        <ContentCardWrapper bgColor={color}>
          <ContentCardHeadline>{title}</ContentCardHeadline>
        </ContentCardWrapper>
      </StyledLink>
    </motion.div>
  );
};
