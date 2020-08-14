import s from "./Input.module.css";
import React from "react";


const Input = () => {
    return (
        <div className={s.inputBlock}>

            <input type="text"/>

            <button>Send</button>

        </div>
    )
};

export default Input;