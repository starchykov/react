import React from 'react'
import s from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: '1',
                    followed: true,
                    fullName: 'Ivan',
                    avatarUrl: 'https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4',
                    status: 'it`s fine',
                    location: {country: 'Ukraine', city: 'Kyiv'}
                },
                {
                    id: '2',
                    followed: true,
                    fullName: 'Ivan',
                    avatarUrl: 'https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4',
                    status: 'it`s fine',
                    location: {country: 'USA', city: 'Washington'}
                },
                {
                    id: '3',
                    followed: false,
                    fullName: 'Ivan',
                    avatarUrl: 'https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4',
                    status: 'it`s fine',
                    location: {country: 'Britain', city: 'London'}
                },
                {
                    id: '4',
                    followed: true,
                    fullName: 'Ivan',
                    avatarUrl: 'https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4',
                    status: 'it`s fine',
                    location: {country: 'Canada', city: 'Oslo'}
                }
            ]
        );
    }


    return (
        <div> {
            props.users.map((u) => <div key={u.id} className={s.userCard} id={u.id}>

            <span className={s.avatarCase}>
                <img src={u.avatarUrl} alt="" className={s.usersLogo}/>

                {u.followed
                    ? <button className={s.subBut}
                              onClick={() => props.unfollowUser(u.id)}>Unfollow</button>
                    : <button className={s.subBut}
                              onClick={() => props.followUser(u.id)}>Follow</button>}

            </span>

                <span className={s.infoCase}>
                    {u.fullName}
                    {u.status}
                    {u.location.city}
                    {u.location.country}
                </span>

            </div>)

        }
        </div>
    )
};


export default Users;