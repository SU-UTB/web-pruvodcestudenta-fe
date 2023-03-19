import {MoreContentsWrapper} from "./MoreContentsWrapper";
import {Tile} from "../tiles/Tile";
import {MoreContentsTitle} from "./MoreContentsTitle";
import {MoreContentsGridWrapper} from "./MoreContentsGridWrapper";


export interface IContent {
    title: string
    link: string,
    bgColor: string,
    description: string
}

interface IContentsData<T extends IContent> {
    data: Array<T>
    canReplace?: boolean
}

export const MoreContents = (props: IContentsData<IContent>) => {


    return <MoreContentsWrapper>
        <MoreContentsTitle/>
        <MoreContentsGridWrapper>
            {props.data
                .map((c, i) =>
                    <Tile key={i.toString()} link={c.link}
                          title={c.title}
                          prefix={'detail'}
                          canReplace={props.canReplace}/>)}
        </MoreContentsGridWrapper>
    </MoreContentsWrapper>
}