import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserAuthData} from "../../redux/auth";


class HeaderContainer extends React.Component {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    debugger
                    let {id, login, email} = response.data.data;
                    this.props.setUserAuthData(id, login, email);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}
                    isAuth={this.props.isAuth}
                    login={this.props.login} />
        )
    }

}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
};

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);