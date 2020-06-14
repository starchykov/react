import React from 'react'
import s from './users.module.css'
import userPhoto from './../../assets/images/avatar.png'
import {NavLink} from "react-router-dom";


let Users = (props) => {

    //округление общего количества страниц и пуш в спан
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {/*спан с количеством страниц из стейта */}
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.SelectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id} id={u.id} className={s.userCard}>

                    <span className={s.avatarCase}>

                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small
                            != null ? u.photos.small
                                : userPhoto} alt="" className={s.usersLogo}
                            />
                        </NavLink>

                        {u.followed
                            ? <button className={s.subBut}
                                      onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button className={s.subBut}
                                      onClick={() => props.follow(u.id)}>Follow</button>}
                    </span>

                    <span className={s.infoCase}>
                            {u.name}
                        {u.status}
                        {/*{u.location.city}*/}
                        {/*{u.location.country}*/}
                        </span>

                </div>)
            }
        </div>
    )

};

export default Users;