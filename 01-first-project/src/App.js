import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import MenuItem from './components/MenuItem/MenuItem'
import News from './components/News/News'
import Music from './components/Music/Music'
import Setting from './components/Setting/Setting'
import SideBar from './components/SideBar/SideBar'
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (

        <div className={'app-wrapper'}>

            <Header/>
            <MenuItem/>

            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile store={props.store}/>}/>

                <Route path={'/dialogs'}
                       render={() => <DialogsContainer store={props.store}/>}/>

                <Route path={'/news'}
                       render={() => <News/>}/>

                <Route path={'/music'}
                       render={() => <Music/>}/>

                <Route path={'/setting'}
                       render={() => <Setting/>}/>

                {/*<Route path={'/dialogs'}*/}
                {/*       render={SideBarItem}/>*/}
            </div>

        </div>
    );
};


export default App;