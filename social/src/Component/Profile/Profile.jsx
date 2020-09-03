import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {

    return (
        <div className={s.profile}>

            <span className={s.name}>
                -- {props.profileData.fullName}
            </span>

            <ProfileInfo {...props}/>

            <MyPostContainer/>

        </div>
    )
};

export default Profile;