import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    unfollow: (userId: string) => void
    follow: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.postsBlock}>
            <div>
                {pages.map(p => {
                    return <button className={(props.currentPage === p) ? styles.selectedPage : ""}
                                   onClick={() => {
                                       props.onPageChanged(p)
                                   }}>{p}</button>
                })}

            </div>
            {props.users.map(u => <div key={u.id}>
            <span>
                <div className={styles.users}>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small === null ? userPhoto : u.photos.small} alt="avtar_icon"/>
                    </NavLink>
                </div>
            </span>
                <span>
                <div>
                    {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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
    )
}