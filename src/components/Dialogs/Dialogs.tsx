import React from 'react';
import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
    clases?: string
}

type MessagePropsType = {
    message: string
}

function DialogItem  (props: DialogItemPropsType) {
    return (
        <div><NavLink to={`/dialogs/${props.id}`} className={`${classes.dialog} ${props.clases}`}>{props.name}</NavLink>
        </div>)
}
 function Message (props: MessagePropsType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export function Dialogs () {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Igor" id="2" clases={classes.active}/>
                <DialogItem name="Artemii" id="3"/>
                <DialogItem name="Leha" id="4"/>
                <DialogItem name="Alex" id="5"/>
                <DialogItem name="Dima" id="6"/>
                <DialogItem name="Kostia" id="7"/>
            </div>
            <div className={classes.messages}>
                <Message message={"Hi"}/>
                <Message message={"What is you name"}/>
                <Message message={")))))"}/>
            </div>
        </div>
    )
}