import {TileWrapper} from "./TileWrapper";
import {Link} from 'react-router-dom';

import {TileP} from "./TileP";


export interface ITile {
    prefix: string
    title: string
    link: string
}

export const Tile = (props: ITile) => {

    return (
        <Link to={`${props.prefix}/${props.link}`}>
            <TileWrapper>
                <TileP> {props.title}</TileP>
            </TileWrapper>

        </Link>)
}
