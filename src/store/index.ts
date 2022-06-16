import { types } from 'mobx-state-tree';

import { StoreName } from 'enums';
import { PostStore } from 'store/models';

export const rootStore = types.model(StoreName.Root, {
  postsState: types.optional(PostStore, () => PostStore.create({})),
});
