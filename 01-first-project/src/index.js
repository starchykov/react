import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: '1', text: 'Hi? how are you', likesCount: '4'},
    {id: '2', text: 'It`s my first post', likesCount: '12'},
    {id: '2', text: 'It`s my first post', likesCount: '12'},
    {id: '2', text: 'It`s my first post', likesCount: '12'},
    {id: '2', text: 'It`s my first post', likesCount: '12'},
];

let dialogs = [
    {id: '1', name: 'Nikolai'},
    {id: '2', name: 'Petr'},
    {id: '3', name: 'Alexandr'},
    {id: '4', name: 'Ana'},
    {id: '5', name: 'Sergei'},
    {id: '6', name: 'Julia'},
];

let messages = [
    {id: '1', text: 'Hi'},
    {id: '2', text: 'How are you'},
    {id: '3', text: 'I`m fine'},
    {id: '4', text: 'Ana'},
    {id: '5', text: 'Sergei'},
    {id: '6', text: 'Julia'},
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs}  messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);



serviceWorker.unregister();

