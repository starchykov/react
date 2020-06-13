import React from 'react'
import s from './users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/avatar.png'


class Users extends React.Component {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (currentPageNum) => {
        this.props.setCurrentPage(currentPageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };


    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {pages.push(i)};

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && s.SelectedPage}
                                     onClick={() => {this.onPageChanged(p) }}> {p} </span>
                    })}
                </div>

                {
                    this.props.users.map(u => <div key={u.id} id={u.id} className={s.userCard}>

                    <span className={s.avatarCase}>
                        <img src={u.photos.small
                        != null ? u.photos.small
                            : userPhoto} alt="" className={s.usersLogo}/>

                        {u.followed
                            ? <button className={s.subBut}
                                      onClick={() => this.props.unfollowUser(u.id)}>Unfollow</button>
                            : <button className={s.subBut}
                                      onClick={() => this.props.followUser(u.id)}>Follow</button>}
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
    }

}

export default Users;