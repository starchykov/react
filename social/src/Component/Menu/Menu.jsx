import React from 'react'
import s from './Menu.module.css'

const Menu = () => {

    return (
        <div className={s.menu}>

            <div className={s.menuItem}>Profile</div>
            <div className={s.menuItem}>Message</div>
            <div className={s.menuItem}>Friends</div>
            <div className={s.menuItem}>Home</div>
            <div className={s.menuItem}>Setting</div>

        </div>
    )

};

export default Menu;