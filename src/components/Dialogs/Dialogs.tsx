import React, {ChangeEvent} from 'react';
import classes from './Dialog.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionTypes, SendMessageAC, DialogPageType, UpdateNewMessageBodyAC} from "../../redux/state";


type DialogPropsType = {
    dialogsState: DialogPageType
    dispatch: (action: ActionTypes) => void
    newMessageBody: string
}

export function Dialogs(props: DialogPropsType) {

    let dialogsElements = props.dialogsState.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogsState.messages.map(message => <Message message={message.message}/>)

    const newTextMessageHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newTextInput = event.currentTarget.value
        props.dispatch(UpdateNewMessageBodyAC(newTextInput))
    }
    const addMessagesClick = () => {
       props.dispatch(SendMessageAC(props.newMessageBody))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div><input onChange={newTextMessageHandler} placeholder={"You message"} value={props.newMessageBody}/></div>
                <div>
                    <button onClick={addMessagesClick}>Add message</button>
                </div>
            </div>
        </div>
    )
}