import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>

            <div className={s.bgImage}>
                <img src="https://pbs.twimg.com/profile_banners/832854404743254016/1521034964/1500x500" alt=""/>
            </div>

            <div className={s.avatarImage}>
                <img src='https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg' alt=""/>
            </div>


        </div>
    )
};

export default ProfileInfo;