import React from "react";
import s from './Content.module.css'
import {NavLink} from "react-router-dom";

const Content = (props) => {

    return (
        <div className={s.content}>
            <div className={s.authInfo}>

                {(props.authorization.isAuthorized
                    ? <div className={s.authData}>
                        <span>{props.authorization.currentUser.fullName}</span>
                        <img className={s.authLogo}
                             src={props.authorization.currentUser.photos.large
                                 ? props.authorization.currentUser.photos.large
                                 : 'https://alpha-cms.ru/style/user_icons/avatar_man.png'}
                             alt=""/>


                        <div className={s.menu}>
                            <button>☰</button>

                            <div className={s.menuDropdown}>
                                <NavLink to={`/profile/${props.authorization.currentUser.userId}`}>My profile</NavLink>
                                <NavLink to={''}>Setting</NavLink>
                                <NavLink to={''}>Logout</NavLink>
                            </div>
                        </div>

                    </div>

                    : <NavLink to={'/login'}>Login</NavLink>)}

            </div>

            <div className={s.photos}>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>

            <div className={s.friends}>

            </div>

            <div className={s.other}>

            </div>

        </div>
    )
};
export default Content;