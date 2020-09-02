import React from 'react'
import s from './Login.module.css'

const Login = () => {


    return (
        <div className={s.loginBox}>
            <h1>Welcome back</h1>

            <span>Login</span>
            <input type=""/>
            <span>Password</span>
            <input type="password"/>

            <button>Login</button>

        </div>
    )
};

export default Login;