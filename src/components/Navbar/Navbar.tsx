import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../redux/state";
import {NavbarFriends} from "./NavbarFriends";

type NavbarPropsType = {
    friends: FriendsType[]
}

export function Navbar(props: NavbarPropsType) {

    let navbarFriends = props.friends.filter((friend) => friend.id <= 3).map(f => <NavbarFriends  name={f.name}/>)

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
            <div className={classes.friends}>
                <h3>*Friends*</h3>
                {navbarFriends}
            </div>

        </div>
    );
}