import { Instance } from 'mobx-state-tree';

import { rootStore } from 'store/index';

export type RootStoreType = Instance<typeof rootStore>;
