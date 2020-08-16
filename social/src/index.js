import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Component/redux/state'

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 state={store.getState()}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

};


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
