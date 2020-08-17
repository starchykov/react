import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPost/MyPost";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {

    return (
        <div className={s.profile}>

            -- Ivan Starchykov

            <ProfileInfo/>

            <MyPostContainer posts={props.posts}
                             dispatch={props.dispatch}/>

        </div>
    )
};

export default Profile;