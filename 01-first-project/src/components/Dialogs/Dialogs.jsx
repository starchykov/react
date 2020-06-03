import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
            {props.name}
        </NavLink>
    )
};


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItem}>
                Dialog

                <DialogItem name={'Nikolai'} id={1}/>
                <DialogItem name={'Petr'} id={2}/>
                <DialogItem name={'Alexandr'} id={3}/>
                <DialogItem name={'Ana'} id={4}/>
                <DialogItem name={'Sergei'} id={5}/>
                <DialogItem name={'Julia'} id={6}/>


            </div>

            <div className={s.messages}>

                <Message message={'Hi'}/>
                <Message message={'How are you'}/>
                <Message message={'I`m fine'}/>


            </div>
        </div>
    )
};

export default Dialogs