import { IContent } from '../../lib/interfaces/IContent';
import { Tile } from '../tiles/Tile';
import { MoreContentsGridWrapper } from './MoreContentsGridWrapper.styled';
import { MoreContentsTitle } from './MoreContentsTitle';
import { MoreContentsWrapper } from './MoreContentsWrapper.styled';

interface IContentsData<T extends IContent> {
  data: Array<T>;
  canReplace?: boolean;
}

export const MoreContents = ({ data, canReplace }: IContentsData<IContent>) => {
  return (
    <MoreContentsWrapper>
      <MoreContentsTitle />
      <MoreContentsGridWrapper>
        {data.map((c, i) => (
          <Tile
            key={i.toString()}
            id={c.id}
            title={c.title}
            prefix={'detail'}
            canReplace={canReplace}
          />
        ))}
      </MoreContentsGridWrapper>
    </MoreContentsWrapper>
  );
};
