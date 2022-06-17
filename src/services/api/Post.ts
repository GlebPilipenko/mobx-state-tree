import { AxiosResponse } from 'axios';

import { API_INSTANCE } from 'api/config';
import { PostType } from 'types';

export class PostApi {
  static async load(route: string): Promise<any> {
    return API_INSTANCE.get<Promise<AxiosResponse<PostType[]>>>(`${route}`);
  }
}
