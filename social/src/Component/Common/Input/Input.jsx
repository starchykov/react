import s from "./Input.module.css";
import React from "react";

const Input = (props) => {

    return (
        <div className={s.inputBlock}>

            <input type="text"
                   onChange={props.onChange}
                   value={props.newText}/>

            <button onClick={() => props.f()}>Send</button>

        </div>
    )
};

export default Input;