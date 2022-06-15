import {flow, types} from 'mobx-state-tree';
import {PostApi} from 'services/api';
import {ModelName, Path, StoreName} from 'enums';

export const PostModel = types.model(ModelName.Post, {
  userId: types.identifierNumber,
  id: types.identifierNumber,
  title: types.string,
  body: types.string,
});

export const PostStore = types.model(StoreName.Post, {
  posts: types.array(PostModel),
})
  .actions(self => { // self it's analog THIS
    return {
      load: flow(function* () {
        self.posts = yield PostApi.load(Path.Posts);
      })
    }
  });
