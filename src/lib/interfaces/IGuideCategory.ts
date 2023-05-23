import { IContent } from './IContent';

export interface IGuideCategory extends IContent {
  topics: IContent[];
}
