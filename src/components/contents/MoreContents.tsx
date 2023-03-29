import { MoreContentsWrapper } from './MoreContentsWrapper.styled';
import { Tile } from '../tiles/Tile';
import { MoreContentsTitle } from './MoreContentsTitle';
import { MoreContentsGridWrapper } from './MoreContentsGridWrapper.styled';
import { IContent } from '../../interfaces/IContent';

interface IContentsData<T extends IContent> {
  data: Array<T>;
  canReplace?: boolean;
}

export const MoreContents = (props: IContentsData<IContent>) => {
  return (
    <MoreContentsWrapper>
      <MoreContentsTitle />
      <MoreContentsGridWrapper>
        {props.data.map((c, i) => (
          <Tile
            key={i.toString()}
            link={c.link}
            title={c.title}
            prefix={'detail'}
            canReplace={props.canReplace}
          />
        ))}
      </MoreContentsGridWrapper>
    </MoreContentsWrapper>
  );
};
