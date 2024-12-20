'use strict'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bsr-modaldialog/dist/index.css'
import 'bsr-sau/dist/index.css'
import "bsr-tree-virtual/dist/index.css"
import 'bsr-tabs/dist/index.css'
import 'bsr-table-extension/dist/index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


