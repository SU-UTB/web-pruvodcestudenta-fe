import {IContent} from "../lib/interfaces/IContent";

export interface ISection extends IContent {
    topics: IContent[]
}