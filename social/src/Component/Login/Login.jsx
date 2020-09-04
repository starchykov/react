import React from 'react'
import s from './Login.module.css'
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {LoginMe} from "../redux/authReducer";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <span>Login</span>
            <Field component={'input'}
                   name={'email'}
                   type='text'
                   placeholder={'Login'}/>


            <span>Password</span>
            <Field component={'input'}
                   name={'password'}
                   type='password'
                   placeholder={'Password'}/>

            <button>Login</button>

            <Field className={s.checkBox}
                   component={'input'}
                   name={'rememberMe'}
                   type={'checkbox'}/>
            <span>Remember me</span>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm);

export const Login = (props) => {

    const onSubmit = (formData) => props.LoginMe({formData});

    return (
        <div className={s.loginBox}>
            <h1>Welcome back</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default connect(null, {LoginMe})(Login);