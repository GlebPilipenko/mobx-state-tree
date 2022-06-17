import { flow, types } from 'mobx-state-tree';

import { ModelName, Path, StatusCode, StoreName } from 'enums';
import { TodoApi } from 'services/api';

export const TodoModel = types.model(ModelName.Todo, {
  userId: types.number,
  id: types.number,
  title: types.string,
  completed: types.optional(types.boolean, false),
});

export const TodoStore = types
  .model(StoreName.Todo, {
    todos: types.array(TodoModel),
  })
  .actions(self => ({
    loadTodos: flow(function* () {
      try {
        const response = yield TodoApi.load(Path.Todos);
        const { data, status } = response;

        if (status === StatusCode.Success) {
          self.todos = data;
        }
      } catch (e) {
        console.log(e);
      }
    }),
  }))
  .views(self => ({
    get getLastTodoId() {
      return self.todos.length > 0 && self.todos[self.todos.length - 1].id;
    },
  }));
