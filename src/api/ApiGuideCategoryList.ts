import { AxiosInstance } from 'axios';

import { SECTIONS } from '../lib/constants';
import { IContent } from '../lib/interfaces/IContent';
import { IGuideCategory } from '../lib/interfaces/IGuideCategory';

export class ApiGuideCategoryList {
  #client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  getGuideCategoryList = async () => {
    return await this.#client.get<Array<IGuideCategory>>(SECTIONS);
  };
  getGuideCategory = async (id: number) => {
    const response = await this.#client.get<Object, any>(`${SECTIONS}/${id}`);
    const model: GuideCategory = {
      ...response.data.section,
      topics: response.data.topics,
    };
    return model;
  };
}

class GuideCategory implements IGuideCategory {
  bg_color: string;
  description: string;
  id: number;
  link: string;
  title: string;
  topics: IContent[];

  constructor(
    bg_color: string,
    description: string,
    id: number,
    link: string,
    title: string,
    topics: IContent[],
  ) {
    this.bg_color = bg_color;
    this.description = description;
    this.id = id;
    this.link = link;
    this.title = title;
    this.topics = topics;
  }
}
