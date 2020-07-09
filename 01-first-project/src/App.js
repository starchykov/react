import React, {Component} from 'react'
import './App.css'
import {Route, withRouter} from 'react-router-dom'
import MenuItem from './components/MenuItem/MenuItem'
import News from './components/News/News'
import Music from './components/Music/Music'
import Setting from './components/Setting/Setting'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import Loader from "./components/Common/Loader/Loader";


class App extends Component {

    componentDidMount(): void {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (
            <div>

                <HeaderContainer/>

                <div className={'app-wrapper'}>
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

            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);