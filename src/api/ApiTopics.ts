import { AxiosInstance } from 'axios';

import { TOPICS } from '../lib/constants';
import { IContent } from '../lib/interfaces/IContent';

export class ApiTopics {
  #client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  getTopics = async () => {
    return await this.#client.get<Array<IContent>>(TOPICS);
  };
  getTopic = async (id: number) => {
    return await this.#client.get<IContent>(`${TOPICS}/${id}`);
  };
}
