import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {

    return (
        <div className={s.profile}>

            <span className={s.name}>
                -- Ivan Starchykov
            </span>

            <ProfileInfo/>

            <MyPostContainer/>

        </div>
    )
};

export default Profile;