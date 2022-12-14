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

export type InitialStateType = DialogPageType

//export type InitialStateType = typeof  initialState

const initialState: InitialStateType = {
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

export const dialogsReducer = (state: InitialStateType = initialState,
                               action: DialogActionType): InitialStateType=> {
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