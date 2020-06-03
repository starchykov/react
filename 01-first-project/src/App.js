import React from 'react'
import './App.css'
import  {Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import MenuItem from './components/MenuItem/MenuItem'
import News from './components/News/News'
import Music from './components/Music/Music'
import Setting from './components/Setting/Setting'



const App = () => {
    return (

        <BrowserRouter>
            <div className={'app-wrapper'}>

                <Header/>
                <MenuItem/>
                <div className={'app-wrapper-content'}>

                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/setting'} component={Setting}/>

                </div>

            </div>
        </BrowserRouter>
        
    );
};


export default App;
