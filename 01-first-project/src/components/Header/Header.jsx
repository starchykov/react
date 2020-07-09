import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return (
        <header className={s.Header}>
            <div className={s.contentWrapper}>
                <img src="https://j-older.github.io/Projects/logo.svg" alt=""/>

                <div className={s.loginBlock}>

                    {props.isAuth

                        ? <div> {props.login}
                            <button onClick={props.logout}>Logout</button>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
};

export default Header;