import {v1} from "uuid";
import {ActionTypes, DialogPageType} from "./store";

const initialState = {
    dialogs: [
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Igor"},
        {id: v1(), name: "Kostia"},
        {id: v1(), name: "leha"},
        {id: v1(), name: "Kiril"},
    ],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "What is you name"},
        {id: v1(), message: ")))))"},
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state: DialogPageType = initialState,
                               action: ActionTypes)=> {
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

type SendMessageActionType = ReturnType<typeof SendMessageAC>
type UpdateNewMessageBody = ReturnType<typeof UpdateNewMessageBodyAC>

export type DialogActionType = SendMessageActionType | UpdateNewMessageBody