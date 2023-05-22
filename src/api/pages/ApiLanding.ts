import { AxiosInstance } from 'axios';
import { ISearchTag } from '../../lib/interfaces/ISearchTag';
import { ISection } from '../../lib/interfaces/ISection';
import { Constants } from '../../tools/Constants';

export interface ILanding {
  sections: Array<ISection>;
  searchTags: Array<ISearchTag>;
}

export class ApiLanding {
  #client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  getLanding = async () => {
    return await this.#client.get<ILanding>(Constants.PAGES_LANDING);
  };
}
