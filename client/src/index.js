import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import messageReducers from "./store/reducers/messaagesReducer";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(messageReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
    <Provider store={store}>
       <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
