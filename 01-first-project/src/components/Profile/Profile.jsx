import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Header = () => {
    return (
        <div className={s.mainContent}>

            <ProfileInfo/>

            <MyPosts/>

        </div>
    )
};

export default Header;