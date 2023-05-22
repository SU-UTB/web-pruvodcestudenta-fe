import { AxiosInstance } from 'axios';
import { PAGES_LANDING } from '../../lib/constants';
import { ISearchTag } from '../../lib/interfaces/ISearchTag';
import { ISection } from '../../lib/interfaces/ISection';

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
    return await this.#client.get<ILanding>(PAGES_LANDING);
  };
}
