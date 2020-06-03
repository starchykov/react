import React from 'react'
import s from './MenuItem.module.css'

const MenuItem = () => {
    return (
        <nav className={s.menuItem}>
            <div className={s.item}>
                <a href={'/profile'}>Profile</a>
            </div>

            <div className={`${s.item} ${s.active}`}>
                <a href={'/dialogs'}>Message</a>
            </div>

            <div className={s.item}>
                <a href={'/news'}>News</a>
            </div>

            <div className={s.item}>
                <a href={'/music'}>Music</a>
            </div>

            <div className={s.item}>
                <a href={'/setting'}>Setting</a>
            </div>

        </nav>
    )
};

export default MenuItem;

