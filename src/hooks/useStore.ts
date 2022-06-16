import { useContext } from 'react';

import { rootStoreContext } from 'index';
import { RootStoreType } from 'store/types';

export const useStore = (): RootStoreType => {
  return useContext(rootStoreContext);
};
