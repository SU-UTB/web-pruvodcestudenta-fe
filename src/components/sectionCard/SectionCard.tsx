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
  color?: string;
}

export const SectionCard = ({
  prefix,
  title,
  id,
  canReplace,
  color,
}: ISectionCard) => {
  return (
    <motion.div layout>
      <StyledLink to={`${prefix}/${id}`} replace={canReplace}>
        <SectionCardWrapper bgColor={color}>
          <SectionCardHeadline>{title}</SectionCardHeadline>
        </SectionCardWrapper>
      </StyledLink>
    </motion.div>
  );
};
