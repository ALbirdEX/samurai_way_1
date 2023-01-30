import React from 'react';
import {UsersPropsType} from './UsersContainer'
import styles from './Users.module.css'
import {default as axios} from 'axios'
import userPhoto from '../../assets/images/user.png'

export class Users extends React.Component <UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            });
    }

    /* getUsers = () => {
         if (this.props.users.length < 4) {
             axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
                 this.props.setUsers(response.data.items)
             })
         }
     }*/

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={styles.postsBlock}>
            <div>
                {pages.map(p => {
                    return <button className={(this.props.currentPage === p) ? styles.selectedPage : ""}
                                 onClick={() => {this.onPageChanged(p)}}>{p}</button>
                })}

            </div>
            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div className={styles.users}>
                    <img src={u.photos.small === null ? userPhoto : u.photos.small} alt="avtar_icon"/>
                </div>
            </span>
                <span>
                <div>
                    {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
                <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
            </div>)}
        </div>
    }
}