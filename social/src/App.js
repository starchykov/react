import React from 'react';
import s from './App.module.css'
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import Profile from "./Component/Profile/Profile";
import Dialogs from "./Component/Dialogs/Dialogs";


const App = () => {
    return (
        <div className={s.appWrapper}>

            <Header/>

            <Menu/>

            <Profile/>

            <Dialogs/>

        </div>
    )
};

export default App;
