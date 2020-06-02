import React from 'react'
import s from './Profile.module.css'

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

            <div>
                My post

                <div>
                    New posts
                </div>

                <div className={'posts'}>
                    <div className={s.item}>Post1</div>
                    <div className={s.item}>Post2</div>
                    <div className={s.item}>Post3</div>
                </div>
            </div>
        </div>
    )
};

export default Header;