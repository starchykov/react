import React from 'react'
import s from './Login.module.css'
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {LoginMe} from "../../redux/authReducer";
import {required} from "../../utils/Validators/Validators";
import {InputForm} from "../Common/Input/FormControl";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputContainer}>
                <span>Login</span>
                <Field component={InputForm}
                       name={'email'}
                       type='text'
                       placeholder={'Login'}
                       validate={[required]}/>
            </div>


            <div className={s.inputContainer}>
                <span>Password</span>
                <Field component={InputForm}
                       name={'password'}
                       type='password'
                       placeholder={'Password'}
                       validate={[required]}/>
            </div>


            <div className={s.inputContainer}>
                <button>Login</button>

                <Field className={s.checkBox}
                       component={InputForm}
                       name={'rememberMe'}
                       type={'checkbox'}/>
                <span>Remember me</span>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm);

export const Login = (props) => {

    const onSubmit = (formData) => props.LoginMe(formData);

    return (
        <div className={s.loginBox}>
            <h1>Welcome back</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};


export default connect(null, {LoginMe})(Login);