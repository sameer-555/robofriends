import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'tachyons'
import App from './containers/App' 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<App/>
, document.getElementById('root'));
//bit.ly/CRA-PWA
serviceWorker.unregister();