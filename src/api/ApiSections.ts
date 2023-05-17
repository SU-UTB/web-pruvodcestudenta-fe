import { AxiosInstance } from 'axios';

import { Constants } from '../tools/Constants';
import { ISection } from '../interfaces/ISection';
import { IContent } from '../lib/interfaces/IContent';

export class ApiSections {
  #client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  getSections = async () => {
    return await this.#client.get<Array<ISection>>(Constants.SECTIONS);
  };
  getSection = async (id: number) => {
    const response = await this.#client.get<Object, any>(
      `${Constants.SECTIONS}/${id}`,
    );
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
