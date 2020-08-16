import React from 'react';
import s from './App.module.css'
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import Profile from "./Component/Profile/Profile";
import Dialogs from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Content from "./Component/Content/Content";
import {addPost} from "./Component/redux/state";


const App = (props) => {
    return (
        <BrowserRouter>

            <div className={s.appWrapper}>

                <Header/>

                <Menu/>

                <div className={s.appContent}>

                    <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage}
                                                                    dispatch={props.store.dispatch.bind(props.store)}/>}/>

                    <Route path={'/dialogs'} render={() => <Dialogs messages={props.state.messagesPage}
                                                                    dialogs={props.state.messagesPage}
                                                                    dispatch={props.store.dispatch.bind(props.store)}/>}/>

                </div>

                <Content/>

            </div>

        </BrowserRouter>
    )
};

export default App;
