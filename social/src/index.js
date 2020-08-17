import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Component/redux/reduxStore'

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 state={state}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});

serviceWorker.unregister();