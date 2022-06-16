import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks';

const DELAY = 2000;

export const App = observer(() => {
  const {
    posts,
    posts: { getLastPostId },
  } = useStore();

  const validLastPostId = typeof getLastPostId === 'boolean' ? 0 : getLastPostId;

  useEffect(() => {
    setTimeout(() => {
      posts.load();
    }, DELAY);
  }, [posts]);

  return (
    <div>
      <h1>MobX state tree...</h1>
      {`Count - ${posts.posts.length}`}
      <div>{`Last id - ${validLastPostId}`}</div>
    </div>
  );
});
