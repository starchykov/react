import React from 'react'
import './App.css'
import {Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import MenuItem from './components/MenuItem/MenuItem'
import News from './components/News/News'
import Music from './components/Music/Music'
import Setting from './components/Setting/Setting'


const App = (props) => {

    let ProfileItem = () => <Profile posts={props.posts}/>;

    return (

        <BrowserRouter>
            <div className={'app-wrapper'}>

                <Header/>
                <MenuItem/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} component={ProfileItem}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogs}  messages={props.messages}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>

                </div>

            </div>
        </BrowserRouter>

    );
};


export default App;
