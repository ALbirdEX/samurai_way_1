import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../redux/store";
import {NavbarFriends} from "./NavbarFriends";

/*type NavbarPropsType = {
    friends: FriendsType[]
}*/

export function Navbar() {

  //  let navbarFriends = props.friends.map(friend => <NavbarFriends key={friend.id} name={friend.name}/>)

    return (
        <div className={classes.menu}>
            <nav>
                <div>
                    <NavLink to={"/profile"}
                             className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to={"/dialogs/"}
                             className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>Message</NavLink>
                </div>
                <div>
                    <NavLink to={"/new"}
                             className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>New</NavLink>
                </div>
                <div>
                    <NavLink to={"/music"}
                             className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>Music</NavLink>
                </div>
                <div>
                    <NavLink to={"/settings"}
                             className={({isActive}) => isActive ? classes.activeLink : classes.noActive}>Settings</NavLink>
                </div>
            </nav>
            <div>
                <h3 className={classes.friends}>Friends</h3>
                {/*<div className={classes.people}>{navbarFriends}</div>*/}
            </div>

        </div>
    );
}