import { ISection } from '../../../../lib/interfaces/ISection';
import { ContentCard } from '../../../shared/contentCard/ContentCard';
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
      <SectionListWrapper>
        {sectionList.map(({ title, slug, color }) => (
          <ContentCard
            key={slug}
            slug={slug}
            title={title}
            color={color}
            width={258}
          />
        ))}
      </SectionListWrapper>
    </>
  );
};
