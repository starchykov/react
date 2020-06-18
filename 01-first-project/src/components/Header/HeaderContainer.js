import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth";

class HeaderContainer extends React.Component {

    componentDidMount(): void {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}
                    isAuth={this.props.isAuth}
                    login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
};

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);