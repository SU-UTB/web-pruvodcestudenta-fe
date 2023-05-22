import { AxiosInstance } from 'axios';
import { PAGES_LANDING } from '../../lib/constants';
import { IGuideCategory } from '../../lib/interfaces/IGuideCategory';
import { ISearchTag } from '../../lib/interfaces/ISearchTag';

export interface ILanding {
  sections: Array<IGuideCategory>;
  searchTags: Array<ISearchTag>;
}

export class ApiLanding {
  #client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  getLanding = async () => {
    return await this.#client.get<ILanding>(PAGES_LANDING);
  };
}
