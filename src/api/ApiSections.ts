import {AxiosInstance} from 'axios';

import {ISection} from "../contexts/SectionsContext";
import {Constants} from "../tools/Constants";

export class ApiSections {
    #client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.#client = client;
    }

    getSections = async () => {
        return await this.#client.get<Array<ISection>>(Constants.SECTIONS);
    }
}