import React from 'react';
import {UsersPropsType} from './UsersContainer'
import styles from './Users.module.css'
import {default as axios} from 'axios'
import userPhoto from '../../assets/images/user.png'


export class Users extends React.Component <UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
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

        return <div className={styles.postsBlock}>
            {/*<center>
                <button onClick={this.getUsers}>Get users</button>
            </center>
            <hr/>*/}
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
