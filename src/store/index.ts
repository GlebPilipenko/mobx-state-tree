import { types } from 'mobx-state-tree';

import { StoreName } from 'enums';
import { PostStore } from 'store/models';
import { TodoStore } from 'store/models/todos';

export const rootStore = types.model(StoreName.Root, {
  postsState: types.optional(PostStore, () => PostStore.create({})),
  todosState: types.optional(TodoStore, () => TodoStore.create({})),
});
