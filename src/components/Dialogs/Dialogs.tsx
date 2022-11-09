import React from 'react';
import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
    class?: string
}

type MessagePropsType = {
    message: string
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div><NavLink to={`/dialogs/${props.id}`}
                      className={({isActive}) => isActive ? ` ${classes.active} ${classes.dialog}` : classes.dialog}>{props.name}</NavLink>
        </div>)
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export function Dialogs() {

    const dialogs = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Kostia"},
        {id: 4, name: "leha"},
        {id: 5, name: "Kiril"},
    ]

    const messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "What is you name"},
        {id: 3, message: ")))))"},
    ]

    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = messages.map(message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}