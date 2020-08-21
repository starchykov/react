import React from 'react'
import s from './Users.module.css'
import UserItem from "./UserItem/UserItem";
import * as axios from "axios";

const Users = (props) => {


    if (props.usersPage.users.length === 0) {
        // props.setUsers([
        //     {
        //         id: '0',
        //         followed: true,
        //         name: 'Ivan Starchykov',
        //         photos: {large: 'https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg', small: ''},
        //         status: 'Lorem ipsum dolor sit amet',
        //         location: {city: 'Kyiv', country: 'Ukraine'}
        //     },
        //     {
        //         id: '1',
        //         followed: true,
        //         name: 'Petr Bohomaz',
        //         photos: {large: 'https://instagram.fhrk5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/109815654_298150324668532_3293531322054430467_n.jpg?_nc_ht=instagram.fhrk5-2.fna.fbcdn.net&_nc_ohc=E6YgEljE9NcAX9cvAcl&oh=5773bcaa4c3a388c900e43c97dca083a&oe=5F6368AC', small: ''},
        //         status: 'Lorem ipsum dolor sit amet',
        //         location: {city: 'Lviv', country: 'Ukraine'}
        //     },
        // ])

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
    }

    let userItem = props.usersPage.users.map((el) => <UserItem key={el.id}
                                                               id={el.id}
                                                               name={el.name}
                                                               photos={el.photos}
                                                               status={el.status === null ? undefined : el.status}
                                                               followed={el.followed}
                                                               location={el.location === undefined ? undefined  : el.location}
                                                               follow={props.followUser}
                                                               unfollow={props.unfollowUser}/>);

    return (
        <div className={s.users}>
            {userItem}
        </div>
    )
};


export default Users;