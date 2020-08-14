import React from 'react'
import s from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {

    return (
        <div className={s.menu}>

            <NavLink to={'/profile'} activeClassName={s.active} className={s.menuItem}>Profile</NavLink>
            <NavLink to={'/dialogs'} activeClassName={s.active} className={s.menuItem}>Message</NavLink>
            <NavLink to={'/friends'} activeClassName={s.active} className={s.menuItem}>Friends</NavLink>
            <NavLink to={'/home'} activeClassName={s.active} className={s.menuItem}>Home</NavLink>
            <NavLink to={'/setting'} activeClassName={s.active} className={s.menuItem}>Setting</NavLink>

        </div>
    )

};

export default Menu;