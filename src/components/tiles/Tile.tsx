import {TileWrapper} from "./TileWrapper";
import {Link} from 'react-router-dom';

import {TileP} from "./TileP";


export interface ITile {
    p: string
    link: string
}

export const Tile = (preset: ITile) => {

    return (
        <Link to={`sections/${preset.link}`}>
            <TileWrapper>
                <TileP> {preset.p}</TileP>
            </TileWrapper>

        </Link>)
}
