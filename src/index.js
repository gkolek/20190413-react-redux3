import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

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

// window.dispatch({type:'ADD_TODO', text:'first todo text'})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

