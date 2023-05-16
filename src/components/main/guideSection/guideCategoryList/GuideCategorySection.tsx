import { ISection } from '../../../../interfaces/ISection';
import { GuideCategoryCard } from '../../../guideCategory/GuideCategoryCard';
import { GuideCategoryWrapper } from './GuideCategoryWrapper.styled';
import { GuideCatedoryHeader } from './header/GuideCatedoryHeader';
import { GuideCategoryListMore } from './more/GuideCategoryListMore';

interface Props {
  sections: ISection[];
}

export const GuideCategorySection = ({ sections }: Props) => {
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
