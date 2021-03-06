import { flow, types } from 'mobx-state-tree';

import { ModelName, Path, StatusCode, StoreName } from 'enums';
import { PostApi } from 'services/api/Post';

export const PostModel = types.model(ModelName.Post, {
  userId: types.number,
  id: types.number,
  title: types.string,
  body: types.string,
});

export const PostStore = types
  .model(StoreName.Post, {
    posts: types.array(PostModel),
  })
  .actions(self => {
    return {
      loadPosts: flow(function* () {
        try {
          const response = yield PostApi.load(Path.Posts);
          const { data, status } = response;

          if (status === StatusCode.Success) {
            self.posts = data;
          }
        } catch (e) {
          console.log(e);
        }
      }),
    };
  })
  .views(self => ({
    get getLastPostId() {
      return self.posts.length > 0 && self.posts[self.posts.length - 1].id;
    },
  }));
