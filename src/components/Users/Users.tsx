import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import {v1} from "uuid";
import {photoUrl} from "../../redux/users-reducer";

export function Users(props: UsersPropsType) {

    if (props.users.length === 0) {
        props.setUsers(
            {
                id: v1(), photoUrl: photoUrl, followed: false, fullName: "Alexei", status: "I`m ?", location:
                    {city: "Orsha", country: "Belarus"}
            }
        )
    }
    return <div className={styles.postsBlock}>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div className={styles.users}>
                    <img src={u.photoUrl}/>
                </div>
            </span>
            <span>
                <div>

                    {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
            </span>
            <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
            </span>
        </div>)}
    </div>
}