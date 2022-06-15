import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import makeInspectable from 'mobx-devtools-mst';
import {App} from 'App';
import {rootStore} from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = rootStore.create({});
export const RootStoreContext = createContext(store);
const Provider = RootStoreContext.Provider;

makeInspectable(store);

root.render(
  <Provider value={store}>
    <App />
  </Provider>
);
