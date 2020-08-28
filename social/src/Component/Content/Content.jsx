import React from "react";
import s from './Content.module.css'
import {NavLink} from "react-router-dom";

const Content = (props) => {

    return (
        <div className={s.content}>
            <div className={s.authInfo}>
                {/*fix it !!!!!*/}
                {(props.isAuthorized
                    ? props.currentUser.fullName
                    : <NavLink to={'/login'}>
                    Login
                </NavLink>)}

                {props.currentUser.fullName}
            </div>

            <div className={s.photos}>

            </div>

            <div className={s.friends}>

            </div>

            <div className={s.other}>

            </div>

        </div>
    )
};
debugger
export default Content;