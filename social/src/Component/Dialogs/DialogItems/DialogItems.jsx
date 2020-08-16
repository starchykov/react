import React from 'react'
import s from './DialogItems.module.css'
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {

    return (
        <div>

            <NavLink activeClassName={s.active}
                     to={'/dialogs/' + (props.id)}
                     className={s.item}>

                <img src={props.url} alt="dialogItemAva"/>

                <div>{props.name}</div>

            </NavLink>

        </div>
    )
};

export default DialogsItems;