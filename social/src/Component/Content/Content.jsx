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
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                            </div>
                        </div>

                    </div>

                    : <NavLink to={'/login'}>Login</NavLink>)}

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
export default Content;


{/*<svg xmlns="http://www.w3.org/2000/svg"*/}
{/*     width="8" */}
{/*     height="4" */}
{/*     viewBox="0 0 8 4">*/}
{/*    <path fill="none" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"*/}
{/*          d="M.8.7L4 3.3 7.2.7"></path>*/}
{/*</svg>;*/}