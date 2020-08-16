import s from "./Input.module.css";
import React from "react";


const Input = (props) => {

    return (
        <div className={s.inputBlock}>

            <input type="text"
                   ref={props.newText}
                   onChange={props.onPostChange}
                   value={props.newPostText}/>

            <button onClick={() => props.f()}>Send</button>

        </div>
    )
};

export default Input;