import {MoreContentsWrapper} from "./MoreContentsWrapper";
import {Tile} from "../tiles/Tile";


export interface IContent {
    title: string
    link: string,
    bgColor: string,
    description: string
}

interface IContentsData<T extends IContent> {
    data: Array<T>
}

export const MoreContents = (props: IContentsData<IContent>) => {


    return <MoreContentsWrapper>
        {props.data
            .map((c, i) =>
                <Tile key={i.toString()} link={c.link}
                      title={c.title}
                      prefix={'detail'}/>)}
    </MoreContentsWrapper>
}