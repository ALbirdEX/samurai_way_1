import {ActionTypes, SidebarFriendsType} from "./store";
import {v1} from "uuid";

const initialState = {
    friends: [
        {id: v1(), name: "Alex"},
        {id: v1(), name: "Igor"},
        {id: v1(), name: "Kostia"},
        {id: v1(), name: "leha"},
        {id: v1(), name: "Kiril"},
    ]
}

export const sidebarReducer = (state: SidebarFriendsType = initialState,
                               action: ActionTypes) => {
    return state
};