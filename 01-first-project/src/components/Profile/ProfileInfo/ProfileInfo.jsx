import React from 'react'
import s from './ProfileInfo.module.css'
import Loader from "../../Common/Loader/Loader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                    alt=""/>
            </div>

            <div className={s.descriptionBlock}>

                <img className={s.usersLogo} src={props.profile.photos.small}/>
                {props.profile.fullName}
                {props.profile.aboutMe}
            </div>
        </div>


    )
};

export default ProfileInfo