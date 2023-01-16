import React from 'react';
import {UsersPropsType} from './UsersContainer'
import styles from './Users.module.css'
import {default as axios} from 'axios'
import userPhoto from '../../assets/images/user.png'

export function UsersF(props: UsersPropsType) {

    const getUsers = () => {
        if (props.users.length < 4) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
                props.setUsers(response.data.items)
            })
        }
    }

    return <div className={styles.postsBlock}>
        <center>
            <button onClick={getUsers}>Get users</button>
        </center>
        <hr/>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div className={styles.users}>
                    <img src={u.photos.small === null ? userPhoto : u.photos.photo} alt="avtar_icon"/>
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
}