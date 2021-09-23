import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import {store} from "./JS/Store/store.js"
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter> 
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
 
  ,
  document.getElementById('root')
);

