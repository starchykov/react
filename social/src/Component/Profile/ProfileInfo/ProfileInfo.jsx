import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>

            <div className={s.bgImage}>
                <img src="https://pbs.twimg.com/profile_banners/832854404743254016/1521034964/1500x500" alt=""/>
            </div>

            <div className={s.avatarImage}>
                <img src={props.profileData.photos.large ? props.profileData.photos.large : 'https://alpha-cms.ru/style/user_icons/avatar_man.png'} alt=""/>
            </div>

            <div className={s.name}>
                <span>
                    {props.profileData.fullName}
                </span>
            </div>

            <div className={s.id}>
                <span>
                    @
                </span>
                <span>
                    {props.profileData.userId}
                </span>
            </div>

        </div>
    )
};

export default ProfileInfo;