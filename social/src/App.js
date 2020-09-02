import React from 'react';
import s from './App.module.css'
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import {Route} from "react-router-dom";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";
import UsersContainer from "./Component/Users/UsersContainer";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import ContentContainer from "./Component/Content/ContentContainer";
import Login from "./Component/Login/Login";

const App = () => {

    return (
        <div className={s.appWrapper}>
            <Header/>
            <Menu/>
            <div className={s.appContent}>
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer/>}/>

                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>

                <Route path={'/friends'}
                       render={() => <UsersContainer/>}/>

                <Route path={'/login'}
                       render={() => <Login/>}/>
            </div>

            <div className={s.addContent}>

            </div>

            <ContentContainer/>
        </div>
    )
};

export default App;