import {
  SectionCardHeadline,
  SectionCardWrapper,
  StyledLink,
} from './SectionCard.styled';

import { motion } from 'framer-motion';

export interface ISectionCard {
  prefix: string;
  id: number;
  title: string;
  canReplace?: boolean;
  bgColor?: string;
}

export const SectionCard = ({
  prefix,
  title,
  id,
  canReplace,
  bgColor,
}: ISectionCard) => {
  return (
    <motion.div layout>
      <StyledLink to={`${prefix}/${id}`} replace={canReplace}>
        <SectionCardWrapper bgColor={bgColor}>
          <SectionCardHeadline>{title}</SectionCardHeadline>
        </SectionCardWrapper>
      </StyledLink>
    </motion.div>
  );
};
