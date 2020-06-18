import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import MenuItem from './components/MenuItem/MenuItem'
import News from './components/News/News'
import Music from './components/Music/Music'
import Setting from './components/Setting/Setting'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {

    return (

        <div className={'app-wrapper'}>

            <HeaderContainer/>
            <MenuItem/>

            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer/>}/>

                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>

                <Route path={'/news'}
                       render={() => <News/>}/>

                <Route path={'/music'}
                       render={() => <Music/>}/>

                <Route path={'/setting'}
                       render={() => <Setting/>}/>

                <Route path={'/users'}
                       render={() => <UsersContainer/>}/>

                <Route path={'/login'}
                       render={() => <Login/>}/>

                {/*<Route path={'/dialogs'}*/}
                {/*       render={SideBarItem}/>*/}
            </div>

        </div>

    );

};


export default App;