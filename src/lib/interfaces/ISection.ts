import { IContent } from './IContent';

export interface ISection extends IContent {
  topics: IContent[];
}
