import {App} from 'App';
import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {rootStore} from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = rootStore.create({});
export const RootStoreContext = createContext(store);
const Provider = RootStoreContext.Provider;

root.render(
  <Provider value={store}>
    <App />
  </Provider>
);
