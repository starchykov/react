import React from 'react'
import s from './MenuItem.module.css'

const MenuItem = () => {
    return (
        <nav className={s.menuItem}>
            <div className={s.item}>
                <a href={'#'}>Profile</a>
            </div>

            <div className={`${s.item} ${s.active}`}>
                <a href={'#'}>Message</a>
            </div>

            <div className={s.item}>
                <a href={'#'}>News</a>
            </div>

            <div className={s.item}>
                <a href={'#'}>Music</a>
            </div>

            <div className={s.item}>
                <a href={'#'}>Setting</a>
            </div>

        </nav>
    )
};

export default MenuItem;

