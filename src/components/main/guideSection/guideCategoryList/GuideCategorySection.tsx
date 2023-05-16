import { useContext } from 'react';

import { SectionsContext } from '../../../../contexts/SectionsContext';
import { GuideCategoryCard } from '../../../guideCategory/GuideCategoryCard';
import { GuideCategoryWrapper } from './GuideCategoryWrapper.styled';
import { GuideCatedoryHeader } from './header/GuideCatedoryHeader';
import { GuideCategoryListMore } from './more/GuideCategoryListMore';

export const GuideCategorySection = () => {
  const [sections] = useContext(SectionsContext);

  return (
    <>
      <GuideCatedoryHeader />
      <GuideCategoryWrapper>
        {sections.map(({ title, id, link, bgColor, description }) => (
          <GuideCategoryCard
            key={id}
            id={id}
            title={title}
            prefix={'sections'}
          />
        ))}
      </GuideCategoryWrapper>
      <GuideCategoryListMore />
    </>
  );
};
