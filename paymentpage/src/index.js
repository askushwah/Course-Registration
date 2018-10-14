import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./Form.css";
//import 'react-bootstrap/lib';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
const jsonfile = require('jsonfile');



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
