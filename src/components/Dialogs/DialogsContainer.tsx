import {DialogsType, MessagesType, SendMessageAC, UpdateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}
//type MapStatePropsType = InitialStateType

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
            dispatch(UpdateNewMessageBodyAC(newTextInput))
        },
        addMessages: (newMessageBody: string) => {
            dispatch(SendMessageAC(newMessageBody))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)