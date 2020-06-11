import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/es/components/Provider";


//область перерендера
// let rerenderEntireTree = () => {

    ReactDOM.render(
        //область навигации в приложении
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,

        document.getElementById('root')
    )
    ;
// };


//перерендер после змнения стейта
// rerenderEntireTree(store.getState());


//редакс не возвращает стейт подписчикам (возвращать вручную rerenderEntireTree(state);)
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });

serviceWorker.unregister();
