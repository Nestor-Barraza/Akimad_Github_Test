import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import GitState from './context/gitData/gitState';

import App from './App';
ReactDOM.render(
  <BrowserRouter>
    <GitState>
      <App />
    </GitState>
  </BrowserRouter>,
  document.getElementById("root")
);