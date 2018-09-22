import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Todo}from './containers'
import registerServiceWorker from './registerServiceWorker';

  
ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
