import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from "../Common/Forms/Forms";
import {required, maxLengthCreator} from "../../validators/validators";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'Login'} component={Input} validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'Password'} component={Input} validate={[required, maxLength20]}/>
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
        console.log(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;