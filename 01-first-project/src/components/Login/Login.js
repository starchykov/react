import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from "../Common/Forms/Forms";
import {required, maxLengthCreator} from "../../validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div> {props.error}</div>}
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>;
    } else return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);