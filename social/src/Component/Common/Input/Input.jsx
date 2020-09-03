import s from "./Input.module.css";
import React from "react";
import {Field} from "redux-form";

const Input = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputBlock}>


                <Field component={'input'}
                       name={props.name}
                       type="text"
                       value={props.newText}/>

                <button>Send</button>
            </div>
        </form>


    )
};

export default Input;