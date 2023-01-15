import {DialogPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

/*type DialogsContainerType = {
    dialogsState: DialogPageType
    dispatch: (action: DialogActionType) => void
    newMessageBody: string
}*/
/*
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
                 addMessages={addMessagesClick}/>
    )
}*/

/*type MapStatePropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}*/
type MapStatePropsType = DialogPageType

type MapDispatchPropsType = {
    newTextMessage: (newTextInput: string) => void
    addMessages: (newMessageBody: string) => void
}

export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageBody: state.dialogPage.newMessageBody,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        newTextMessage: (newTextInput: string) => {
            dispatch(updateNewMessageBodyAC(newTextInput))
        },
        addMessages: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)