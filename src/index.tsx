import React, { createContext } from 'react';

import makeInspectable from 'mobx-devtools-mst';
import ReactDOM from 'react-dom/client';

import { App } from 'App';
import { rootStore } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const store = rootStore.create({});
export const rootStoreContext = createContext(store);
const { Provider } = rootStoreContext;

makeInspectable(store);

root.render(
  <Provider value={store}>
    <App />
  </Provider>,
);
