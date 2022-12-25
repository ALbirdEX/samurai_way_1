import React from 'react';
import {v1} from "uuid";
import {ActionTypes, DialogPageType} from "./store";

export const SendMessageAC = (newMessageBody: string) => {
    return {
        type: "SEND-MESSAGE",
        messageText: newMessageBody
    } as const
}

export const UpdateNewMessageBodyAC = (newTextInput: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newBody: newTextInput
    } as const
}

export const dialogsReducer = (state: DialogPageType, action: ActionTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageBody = action.newBody
            break;
        case "SEND-MESSAGE":
            const textMessage = state.newMessageBody
            state.messages.push({id: v1(), message: textMessage})
            state.newMessageBody = ''
            break;
    }
    return state
}