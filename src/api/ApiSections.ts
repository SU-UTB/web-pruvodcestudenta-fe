import { AxiosInstance } from 'axios';

import { SECTIONS } from '../lib/constants';
import { IContent } from '../lib/interfaces/IContent';
import { ISection } from '../lib/interfaces/ISection';

export class ApiSections {
  #client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  getSections = async () => {
    return await this.#client.get<Array<ISection>>(SECTIONS);
  };
  getSection = async (id: number) => {
    const response = await this.#client.get<Object, any>(`${SECTIONS}/${id}`);
    const model: Section = {
      ...response.data.section,
      topics: response.data.topics,
    };
    return model;
  };
}

class Section implements ISection {
  bgColor: string;
  description: string;
  id: number;
  link: string;
  title: string;
  topics: IContent[];

  constructor(
    bgColor: string,
    description: string,
    id: number,
    link: string,
    title: string,
    topics: IContent[],
  ) {
    this.bgColor = bgColor;
    this.description = description;
    this.id = id;
    this.link = link;
    this.title = title;
    this.topics = topics;
  }
}
