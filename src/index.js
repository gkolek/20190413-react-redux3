import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'

import todoReducer from './store/todo'

import './index.css';
import App from './App';

const reducer = combineReducers({
    mySweetReducer: todoReducer
})

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.dispatch = store.dispatch

ReactDOM.render(<App />, document.getElementById('root'));

