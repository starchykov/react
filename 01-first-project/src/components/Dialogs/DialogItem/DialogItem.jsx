import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";


const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
            {props.name}
        </NavLink>
    )
};

export default DialogItem