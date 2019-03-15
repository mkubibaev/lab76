import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './containers/MainContainer/MainContainer'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<MainContainer />, document.getElementById('root'));
serviceWorker.unregister();
