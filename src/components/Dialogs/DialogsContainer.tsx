import React from 'react';
import {DialogPageType,} from "../../redux/store";
import {DialogActionType, SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
    dialogsState: DialogPageType
    dispatch: (action: DialogActionType) => void
    newMessageBody: string
}

export function DialogsContainer(props: DialogsContainerType) {

    const newTextMessageHandler = (newTextInput: string) => {
        props.dispatch(UpdateNewMessageBodyAC(newTextInput))
    }
    const addMessagesClick = (newMessageBody: string) => {
        props.dispatch(SendMessageAC(newMessageBody))
    }
    return (
        <Dialogs dialogs={props.dialogsState.dialogs}
                 messages={props.dialogsState.messages}
                 newMessageBody={props.newMessageBody}
                 newTextMessage={newTextMessageHandler}
                 addMessages={addMessagesClick}
        />
    )
}