import { ISection } from '../../../../lib/interfaces/ISection';
import { ContentCard } from '../../../shared/contentCard/ContentCard';
import { SectionListWrapper } from './SectionListWrapper.styled';
import { SectionHeader } from './header/SectionHeader';

interface Props {
  sectionList: ISection[];
}

export const SectionList = ({ sectionList }: Props) => {
  return (
    <>
      <SectionHeader />
      <SectionListWrapper>
        {sectionList.map(({ id, title, slug, color, icon }) => (
          <ContentCard
            key={`${slug}-${id}`}
            slug={slug}
            title={title}
            color={color}
            width={260}
            icon={icon}
          />
        ))}
      </SectionListWrapper>
    </>
  );
};
