import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import reducer from './reducers'
import { Log, getAllUsers, delUser } from './actions/index'
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/saga'
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
