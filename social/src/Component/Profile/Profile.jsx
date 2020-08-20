import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {

    return (
        <div className={s.profile}>

            -- Ivan Starchykov

            <ProfileInfo/>

            <MyPostContainer/>

        </div>
    )
};

export default Profile;