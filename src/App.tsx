import {useEffect} from "react";
import {useStore} from "hooks";
import {observer} from "mobx-react-lite";

export const App = observer(() => {
  const {posts} = useStore();

  useEffect(() => {
    posts.load();
  }, [])

  return (
    <div>
      <h1>MobX state tree...</h1>
      {posts.posts.length}
    </div>
  );
});
