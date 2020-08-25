import React from 'react'
import s from './Header.module.css'
import Logo from "../Common/Logo/Logo";


const Header = () => {
    return (
        <header className={s.header}>
            <Logo/>
        </header>
    )
};


export default Header;