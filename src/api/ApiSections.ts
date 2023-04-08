import {AxiosInstance} from 'axios';

import {Constants} from '../tools/Constants';
import {ISection} from "../interfaces/ISection";

export class ApiSections {
  #client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  getSections = async () => {
    return await this.#client.get<Array<ISection>>(Constants.SECTIONS);
  };
}
