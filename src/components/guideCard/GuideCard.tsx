import {
  GuideCardHeadline,
  GuideCardWrapper,
  StyledLink,
} from './GuideCard.styled';

import { motion } from 'framer-motion';

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
    <motion.div layout>
      <StyledLink to={`${prefix}/${id}`} replace={canReplace}>
        <GuideCardWrapper bgColor={bgColor}>
          <GuideCardHeadline>{title}</GuideCardHeadline>
        </GuideCardWrapper>
      </StyledLink>
    </motion.div>
  );
};
