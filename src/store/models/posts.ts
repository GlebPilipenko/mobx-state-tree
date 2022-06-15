import {flow, types} from 'mobx-state-tree';
import {PostApi} from 'services/api';
import {ModelName, Path, StatusCode, StoreName} from 'enums';

export const PostModel = types.model(ModelName.Post, {
  userId: types.number,
  id: types.number,
  title: types.string,
  body: types.string,
});

export const PostStore = types.model(StoreName.Post, {
  posts: types.array(PostModel),
})
  .actions(self => { // self it's analog THIS
    return {
      load: flow(function* () {
        const response = yield PostApi.load(Path.Posts);
        const {data, status} = response;

        if (status === StatusCode.Success) {
          self.posts = data;
        }
      })
    }
  });
