import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks';

const DELAY = 2000;

export const App = observer(() => {
  console.log('Check git config...');

  const {
    postsState: { posts, loadPosts, getLastPostId },
    todosState: { todos, loadTodos, getLastTodoId },
  } = useStore();

  const getLastId = (lastId: number | false): number => {
    return typeof lastId === 'boolean' ? 0 : lastId;
  };

  useEffect(() => {
    setTimeout(() => {
      loadPosts();
      loadTodos();
    }, DELAY);
  }, [loadPosts, loadTodos]);

  return (
    <div>
      <h1>MobX state tree...</h1>

      <div style={{ marginBottom: 25 }}>
        {`Count - ${posts.length}`}
        <div>{`Last id - ${getLastId(getLastPostId)}`}</div>
      </div>

      <div>
        {`Count - ${todos.length}`}
        <div>{`Last id - ${getLastId(getLastTodoId)}`}</div>
      </div>
    </div>
  );
});
