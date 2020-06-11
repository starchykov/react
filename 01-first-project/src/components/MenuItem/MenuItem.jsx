import React from 'react'
import s from './MenuItem.module.css'
import {NavLink} from "react-router-dom";
import SideBar from '../SideBar/SideBar'


const MenuItem = () => {
    return (
        <nav className={s.menuItem}>

            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to={'/users'} activeClassName={s.activeLink}>Users</NavLink>
            </div>

            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Message</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to={'/setting'} activeClassName={s.activeLink}>Setting</NavLink>
            </div>


        </nav>
    )
};

export default MenuItem;

