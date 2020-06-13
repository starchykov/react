import React from 'react'
import s from './users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/avatar.png'

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id} id={u.id} className={s.userCard}>

                    <span className={s.avatarCase}>
                        <img src={u.photos.small
                        != null ? u.photos.small
                            : userPhoto} alt="" className={s.usersLogo}/>

                        {u.followed
                            ? <button className={s.subBut}
                                      onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
                            : <button className={s.subBut}
                                      onClick={() => props.followUser(u.id)}>Follow</button>}
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