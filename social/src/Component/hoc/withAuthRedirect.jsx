import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuthorized: state.authorization.isAuthorized
});

let withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuthorized) return <Redirect to={'/login'}/>;
            else return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps, null)(RedirectComponent)
};

export default withAuthRedirect;