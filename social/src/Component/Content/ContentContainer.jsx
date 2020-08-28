import React from "react";
import Content from "./Content";
import {connect} from "react-redux";
import *as axios from "axios";
import {setAuthorizeData, setCurrentUser} from "../redux/authReducer";

class ContentContainer extends React.Component {

    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                this.props.setAuthorizeData(response.data);
                axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + response.data.data.id).then(response => {
                    setCurrentUser(response.data)
                })
            })
    }

    render() {
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuthorized: state.authorization.isAuthorized,
    currentUser: state.authorization.currentUser
});

export default connect(mapStateToProps, {setAuthorizeData, setCurrentUser})(ContentContainer);
