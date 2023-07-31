import { IContent } from './IContent';

export interface IGuideSection extends IContent {
  topics: IContent[];
}
