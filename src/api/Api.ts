import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from '../lib/constants';
import { ApiSections } from './ApiSections';
import { ApiTopics } from './ApiTopics';
import { ApiLanding } from './pages/ApiLanding';

export class Api {
  private static _instance: Api;

  private constructor() {}

  public static get Instance() {
    // Do you need arguments? Make it a regular static method instead.
    return this._instance || (this._instance = new this());
  }

  #client: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
  });

  sections: ApiSections = new ApiSections(this.#client);
  topics: ApiTopics = new ApiTopics(this.#client);
  pagesLanding: ApiLanding = new ApiLanding(this.#client);
}
