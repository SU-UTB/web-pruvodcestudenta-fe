import { motion } from 'framer-motion';

import { IGuideSection } from '../../../../lib/interfaces/IGuideSection';
import { GuideCard } from '../../../guideCard/GuideCard';
import { GuideSectionListWrapper } from './GuideSectionListWrapper.styled';
import { GuideSectionHeader } from './header/GuideSectionHeader';

interface Props {
  guideSectionList: IGuideSection[];
}
// TODO: Change the prefix value once it's updated in routes and backend
export const GuideSectionList = ({ guideSectionList }: Props) => {
  return (
    <>
      <GuideSectionHeader />
      <motion.div layout>
        <GuideSectionListWrapper>
          {guideSectionList.map(({ title, id, bg_color }) => (
            <GuideCard
              key={id}
              id={id}
              title={title}
              prefix="sekce"
              bgColor={bg_color}
            />
          ))}
        </GuideSectionListWrapper>
      </motion.div>
    </>
  );
};
