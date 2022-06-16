import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks';

const DELAY = 2000;

export const App = observer(() => {
  const {
    postsState: { posts, load, getLastPostId },
  } = useStore();

  const validLastPostId = typeof getLastPostId === 'boolean' ? 0 : getLastPostId;

  useEffect(() => {
    setTimeout(() => {
      load();
    }, DELAY);
  }, [load]);

  return (
    <div>
      <h1>MobX state tree...</h1>
      {`Count - ${posts.length}`}
      <div>{`Last id - ${validLastPostId}`}</div>
    </div>
  );
});
