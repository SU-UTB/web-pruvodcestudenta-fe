import { ISection } from '../../../../interfaces/ISection';
import { GuideCard } from '../../../guideCard/GuideCard';
import { GuideCategoryWrapper } from './GuideCategoryWrapper.styled';
import { GuideCatedoryHeader } from './header/GuideCatedoryHeader';
import { GuideCategoryListMore } from './more/GuideCategoryListMore';

import { motion } from 'framer-motion';

interface Props {
  sections: ISection[];
}

export const GuideCategorySection = ({ sections }: Props) => {
  return (
    <>
      <GuideCatedoryHeader />
      <motion.div layout>
        <GuideCategoryWrapper>
          {sections.map(({ title, id, link, bgColor, description }) => (
            <GuideCard
              key={id}
              id={id}
              title={title}
              prefix={'sections'}
              bgColor={bgColor}
            />
          ))}
        </GuideCategoryWrapper>
      </motion.div>
      <GuideCategoryListMore />
    </>
  );
};
