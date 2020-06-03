import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Header = () => {
    return (
        <div className={s.mainContent}>
            <div>
                <img
                    src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                    alt=""/>
            </div>

            <div>
                Ava + disc
            </div>


            <MyPosts/>

        </div>
    )
};

export default Header;