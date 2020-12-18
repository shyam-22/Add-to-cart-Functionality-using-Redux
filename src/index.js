import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import {Provider} from "react-redux";
import {createStore} from "redux"

import combineReducers  from "./STATE/REDUCERs/rootReducer";



ReactDOM.render(
  <Provider store = {createStore(combineReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
