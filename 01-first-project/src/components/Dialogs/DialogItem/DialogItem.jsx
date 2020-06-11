import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";


const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
            <img
                src="https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4"
                alt=""/>
            {props.name}
        </NavLink>
    )
};

export default DialogItem