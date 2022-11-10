import React from 'react';
import classes from './../Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
    class?: string
}

export function DialogItem(props: DialogItemPropsType) {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}
                     className={({isActive}) => isActive ? ` ${classes.active} ${classes.dialog}` : classes.dialog}>{props.name}
            </NavLink>
        </div>)
}