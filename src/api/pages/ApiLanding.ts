import {AxiosInstance} from 'axios';
import {Constants} from "../../tools/Constants";
import {ISection} from "../../interfaces/ISection";
import {ISearchTag} from "../../interfaces/ISearchTag";

export interface ILanding {
    sections: Array<ISection>,
    searchTags: Array<ISearchTag>
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
