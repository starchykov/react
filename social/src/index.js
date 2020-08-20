import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Component/redux/reduxStore'
import {Provider} from "./StoreContext";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );

};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});
