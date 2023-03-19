import {ContentsWrapper} from "./ContentsWrapper";
import {Tile} from "../tiles/Tile";
import {useContext} from "react";
import {ContentsContext} from "../../contexts/ContentsContext";


export const Contents = () => {
    const contents = useContext(ContentsContext);

    return (<ContentsWrapper>
        {contents
            .map((c, i) =>
                <Tile key={i.toString()} link={c.link}
                      title={c.title}
                      prefix={'detail'}/>)}
    </ContentsWrapper>)
}