import React from 'react';
import s from './App.module.css'
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import Profile from "./Component/Profile/Profile";
import {Route} from "react-router-dom";
import Content from "./Component/Content/Content";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";
import UsersContainer from "./Component/Users/UsersContainer";

const App = () => {

    return (
        <div className={s.appWrapper}>
            <Header/>
            <Menu/>
            <div className={s.appContent}>
                <Route path={'/profile'}
                       render={() => <Profile/>}/>

                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>

                <Route path={'/friends'}
                       render={() => <UsersContainer/>}/>
            </div>
            <Content/>
        </div>
    )
};

export default App;