import React from 'react';
import ReactDOM from 'react-dom';

import MainContainer from './containers/MainContainer/MainContainer'
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(<MainContainer />, document.getElementById('root'));
serviceWorker.unregister();
