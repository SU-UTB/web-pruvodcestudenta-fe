import {TileWrapper} from "./TileWrapper";
import {Link} from 'react-router-dom';

import {TileP} from "./TileP";


export interface ITile {
    title: string
    link: string,
    bgColor: string,
    description: string
}

export const Tile = (preset: ITile) => {

    return (
        <Link to={`sections/${preset.link}`}>
            <TileWrapper>
                <TileP> {preset.title}</TileP>
            </TileWrapper>

        </Link>)
}
