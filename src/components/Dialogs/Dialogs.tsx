import React, {ChangeEvent} from 'react';
import classes from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType,} from "../../redux/store";

type DialogPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
    newTextMessage: (newTextInput: string) => void
    addMessages: (newMessageBody: string) => void
}

export function Dialogs(props: DialogPropsType) {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messages.map(message => <Message message={message.message}/>)

    const newTextMessageHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newTextInput = event.currentTarget.value
        props.newTextMessage(newTextInput)
    }
    const addMessagesClick = () => {
        props.addMessages(props.newMessageBody)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.messageItem}>
                    <div>
                        <input onChange={newTextMessageHandler} placeholder={"You message"}
                               value={props.newMessageBody}/>
                    </div>
                    <div>
                        <button onClick={addMessagesClick}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}