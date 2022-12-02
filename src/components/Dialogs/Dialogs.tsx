import React from 'react';
import classes from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/state";


type DialogPropsType = {
    dialogsSate: DialogPageType
}

export function Dialogs(propps: DialogPropsType) {

    let dialogsElements = propps.dialogsSate.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = propps.dialogsSate.messages.map(message => <Message message={message.message}/>)

    const newTextMessage = React.createRef<HTMLInputElement>()
    const addMessages = () => {
        let text = newTextMessage.current?.value
        alert(text)

    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <input ref={newTextMessage}/>
                <button onClick={addMessages}>Add message</button>
            </div>
        </div>
    )
}