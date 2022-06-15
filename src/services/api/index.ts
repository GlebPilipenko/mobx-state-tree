import {API_INSTANCE} from "api/config";
import {AxiosResponse} from "axios";
import {PostType} from "types";

export class PostApi {
  static async load(route: string) {
    return await API_INSTANCE.get<Promise<AxiosResponse<PostType[]>>>(`${route}`);
  }
}
