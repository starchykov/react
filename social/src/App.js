import React, {Component} from 'react';
import s from './App.module.css'
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";
import UsersContainer from "./Component/Users/UsersContainer";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import ContentContainer from "./Component/Content/ContentContainer";
import Login from "./Component/Login/Login";
import {connect} from "react-redux";
import {initialization} from "./redux/appReducer";
import {compose} from "redux";
import {LoaderData, LoaderStart} from "./Component/Common/Loader/Loader";

class App extends Component {

    componentDidMount(): void {
        this.props.initialization()
    }

    render() {

        if (!this.props.isInitialized) return <LoaderStart/>;

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

                <ContentContainer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
});

export default compose(connect(mapStateToProps, {initialization}), withRouter)(App);