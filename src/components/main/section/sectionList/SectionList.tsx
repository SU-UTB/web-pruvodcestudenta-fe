import { motion } from 'framer-motion';

import { ISection } from '../../../../lib/interfaces/ISection';
import { SectionListWrapper } from './SectionListWrapper.styled';
import { SectionHeader } from './header/SectionHeader';
import { ContentCard } from '../../../shared/contentCard/ContentCard';

interface Props {
  sectionList: ISection[];
}
// TODO: Change the prefix value once it's updated in routes and backend
export const SectionList = ({ sectionList }: Props) => {
  return (
    <>
      <SectionHeader />
      <motion.div layout>
        <SectionListWrapper>
          {sectionList.map(({ title, id, color }) => (
            <ContentCard
              key={id}
              id={id}
              title={title}
              prefix="sekce"
              color={color}
            />
          ))}
        </SectionListWrapper>
      </motion.div>
    </>
  );
};
