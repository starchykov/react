import React from 'react'
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (

        <div className={s.profileInfo}>
            <div>
                <img
                    src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                    alt=""/>
            </div>

            <div className={s.descriptionBlock}>
                Ava disc
            </div>
        </div>


    )
};

export default ProfileInfo