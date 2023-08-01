import { motion } from 'framer-motion';

import { ISection } from '../../../../lib/interfaces/ISection';
import { SectionCard } from '../../../sectionCard/SectionCard';
import { SectionListWrapper } from './SectionListWrapper.styled';
import { SectionHeader } from './header/SectionHeader';

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
          {sectionList.map(({ title, id, bg_color }) => (
            <SectionCard
              key={id}
              id={id}
              title={title}
              prefix="sekce"
              bgColor={bg_color}
            />
          ))}
        </SectionListWrapper>
      </motion.div>
    </>
  );
};
