import React from 'react'
import s from './DialogItems.module.css'

const DialogsItems = (props) => {
    return (
        <div className={s.item}>

            <img src={props.url} alt="dialogItemAva"/>

            <div>{props.name}</div>

        </div>
    )
};

export default DialogsItems;