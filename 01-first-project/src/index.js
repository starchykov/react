import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore'
import App from './App';
import {BrowserRouter} from "react-router-dom";


//область перерендера
let rerenderEntireTree = (state) => {

    ReactDOM.render(

        //область навигации в приложении
        <BrowserRouter>
            <App store={store}
                 state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,

        document.getElementById('root')
    );
};


//перерендер после змнения стейта
rerenderEntireTree(store.getState());


//редакс не возвращает стейт подписчикам (возвращать вручную rerenderEntireTree(state);)
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();
