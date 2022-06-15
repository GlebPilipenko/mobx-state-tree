import {RootStoreContext} from "index";
import {useContext} from "react";

export const useStore = () => {
  return useContext(RootStoreContext)
}
