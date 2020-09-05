import React from "react";
import Content from "./Content";
import {connect} from "react-redux";
import {authorize, LogOutMe, setAuthorizeData, setCurrentUser} from "../../redux/authReducer";

class ContentContainer extends React.Component {

    componentDidMount(): void {
        this.props.authorize()
    }

    render() {
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    authorization: state.authorization,
});

export default connect(mapStateToProps, {setAuthorizeData, setCurrentUser, authorize, LogOutMe})(ContentContainer);
