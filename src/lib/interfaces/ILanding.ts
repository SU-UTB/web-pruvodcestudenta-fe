import { IGuideCategory } from './IGuideCategory';
import { ISearchTag } from './ISearchTag';

export interface ILanding {
  sections: IGuideCategory[];
  searchTags: ISearchTag[];
}
