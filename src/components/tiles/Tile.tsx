import {TileWrapper} from "./TileWrapper.styled";
import {Link} from 'react-router-dom';

import {TileP} from "./TileP.styled";


export interface ITile {
    prefix: string
    title: string
    link: string
    canReplace?: boolean
}

export const Tile = (props: ITile) => {

    return (
        //TODO replace?
        <Link to={`${props.prefix}/${props.link}`} replace={props.canReplace}>
            <TileWrapper>
                <TileP> {props.title}</TileP>
            </TileWrapper>

        </Link>)
}
