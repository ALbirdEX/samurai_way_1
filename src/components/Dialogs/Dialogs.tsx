import React from 'react';
import classes from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/state";


type DialogPropsType = {
    dialogsSate: DialogPageType
}

export function Dialogs(propps: DialogPropsType) {

    const dialogsElements = propps.dialogsSate.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = propps.dialogsSate.messages.map(message => <Message message={message.message}/>)

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