import {v1} from "uuid";

export type DialogsType = {
    id: string,
    name: string,
}
export type MessagesType = {
    id: string,
    message: string
}
export type DialogPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageBody: string
}

/*export type InitialStateType = DialogPageType*/

//export type InitialStateType = typeof  initialState

const initialState: DialogPageType = {
    dialogs: [
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Igor"},
        {id: v1(), name: "Kostia"},
        {id: v1(), name: "leha"},
        {id: v1(), name: "Kiril"},
    ] //as DialogsType[],
    ,
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "What is you name"},
        {id: v1(), message: ")))))"},
    ] //as MessagesType[],
    ,
    newMessageBody: ""
}

export const dialogsReducer = (state: DialogPageType = initialState,
                               action: DialogActionType): DialogPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            return  {...state,newMessageBody: action.newBody }
        case "SEND-MESSAGE":
            const textMessage = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: textMessage}],
                newMessageBody: ''
            }
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: "SEND-MESSAGE",
        messageText: newMessageBody
    } as const
}

export const updateNewMessageBodyAC = (newTextInput: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newBody: newTextInput
    } as const
}

type SendMessageActionType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>

export type DialogActionType = SendMessageActionType | UpdateNewMessageBody