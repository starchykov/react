import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPost/MyPost";
import {addPost} from "../redux/state";

const Profile = (props) => {



    return (
        <div className={s.profile}>

            -- Ivan Starchykov

            <ProfileInfo/>

            <MyPost posts={props.posts}
                    dispatch={props.dispatch}/>

        </div>
    )
};

export default Profile;