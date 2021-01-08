import React from 'react';
import ReactDOM from 'react-dom';

import 'array.prototype.move';
import 'handsontable/dist/handsontable.full.min.css';
import './style/index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

