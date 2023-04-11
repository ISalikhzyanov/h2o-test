import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )
))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);

