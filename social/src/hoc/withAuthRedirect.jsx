import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuthorized: state.authorization.isAuthorized
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuthorized === false) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>;
        }
    }

    return connect(mapStateToProps, null)(RedirectComponent);
};
