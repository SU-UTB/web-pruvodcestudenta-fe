import axios, { AxiosInstance } from 'axios';
import { ApiSections } from './ApiSections';
import { Constants } from '../tools/Constants';

export class Api {
  private static _instance: Api;

  private constructor() {}

  public static get Instance() {
    // Do you need arguments? Make it a regular static method instead.
    return this._instance || (this._instance = new this());
  }

  #client: AxiosInstance = axios.create({
    baseURL: Constants.API_BASE_URL,
  });

  sections: ApiSections = new ApiSections(this.#client);
}
