import React from "react";
import loader from '../../../assets/images/loader.svg'
import s from './Loader.module.css'

const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loader} alt={'Loading'}/>
        </div>
    )
};

export default Loader

