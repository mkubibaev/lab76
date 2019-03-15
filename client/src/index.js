import React from 'react';
import ReactDOM from 'react-dom';

import MainContainer from './containers/MainContainer/MainContainer'
import * as serviceWorker from './serviceWorker';

import messageReducers from "./store/reducer/messaageReducers";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(messageReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

const mainContainer = (
    <Provider store={store}>
       <MainContainer />
    </Provider>
);

ReactDOM.render(mainContainer, document.getElementById('root'));
serviceWorker.unregister();
