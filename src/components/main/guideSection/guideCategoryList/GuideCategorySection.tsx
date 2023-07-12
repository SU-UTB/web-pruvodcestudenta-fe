import { IGuideCategory } from '../../../../lib/interfaces/IGuideCategory';
import { GuideCard } from '../../../guideCard/GuideCard';
import { GuideCategoryWrapper } from './GuideCategoryWrapper.styled';
import { GuideCatedoryHeader } from './header/GuideCatedoryHeader';

import { motion } from 'framer-motion';
import GuideCategoryShowMoreButton from './expandCategoryListButton/ExpandCategoryListButton';

interface Props {
  guideCategoryList: IGuideCategory[];
}
// TODO: Change the prefix value once it's updated in routes and backend
export const GuideCategorySection = ({ guideCategoryList }: Props) => {
  return (
    <>
      <GuideCatedoryHeader />
      <motion.div layout>
        <GuideCategoryWrapper>
          {guideCategoryList.map(({ title, id, bg_color }) => (
            <GuideCard
              key={id}
              id={id}
              title={title}
              prefix={'sections'}
              bgColor={bg_color}
            />
          ))}
        </GuideCategoryWrapper>
      </motion.div>
    </>
  );
};
