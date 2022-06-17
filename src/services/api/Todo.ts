import { AxiosResponse } from 'axios';

import { API_INSTANCE } from 'api/config';

export class TodoApi {
  static async load(route: string): Promise<any> {
    return API_INSTANCE.get<Promise<AxiosResponse<TodoApi[]>>>(`${route}`);
  }
}
