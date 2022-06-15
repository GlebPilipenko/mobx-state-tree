import {StoreName} from "enums";
import {types} from "mobx-state-tree";
import {PostStore} from "store/models";

export const rootStore = types.model(StoreName.Root, {
  posts: types.optional(PostStore, () => PostStore.create({})),
});
