const css = require('./app.scss'); //this tells webpack to include css in bundle.js. We will need style-loader to actually apply the css

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world from boilerplate!</h1>,
  document.getElementById('root')
);