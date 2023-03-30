import { Link } from 'react-router-dom';
import { TileP } from './TileP.styled';
import { TileWrapper } from './TileWrapper.styled';

export interface ITile {
  prefix: string;
  title: string;
  link: string;
  canReplace?: boolean;
}

export const Tile = ({ prefix, title, link, canReplace }: ITile) => {
  return (
    //TODO replace?
    <Link to={`${prefix}/${link}`} replace={canReplace}>
      <TileWrapper>
        <TileP> {title}</TileP>
      </TileWrapper>
    </Link>
  );
};
