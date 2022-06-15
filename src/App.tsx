import {useEffect} from "react";
import {useStore} from "hooks";
import {observer} from "mobx-react-lite";

const DELAY = 2000;

export const App = observer(() => {
  const {posts} = useStore();

  useEffect(() => {
    setTimeout(() => {
      posts.load();
    }, DELAY)
  }, [posts]);

 return (
    <div>
      <h1>MobX state tree...</h1>
      {`Count - ${posts.posts.length}`}
      <div>
        {`Last id - ${posts.findLastPostId}`}
      </div>
    </div>
  );
});
