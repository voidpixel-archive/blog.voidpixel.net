import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App.component';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./store";
import {BrowserRouter} from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);