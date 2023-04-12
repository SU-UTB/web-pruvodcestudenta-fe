import { Link } from 'react-router-dom';
import { TileP } from './TileP.styled';
import { TileWrapper } from './TileWrapper.styled';

export interface ITile {
  prefix: string;
  id: number;
  title: string;
  canReplace?: boolean;
}

export const Tile = ({ prefix, title, id, canReplace }: ITile) => {
  return (
    //TODO replace?
    <Link to={`${prefix}/${id}`} replace={canReplace}>
      <TileWrapper>
        <TileP> {title}</TileP>
      </TileWrapper>
    </Link>
  );
};
