export type LocationType = {
    city: string,
    country: string,
}
export type PhotosType = {
    small?: string,
    photo: string
}
export type UserType = {
    id: string,
    photos: PhotosType,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

export type UsersActionType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType

//export const photoUrl = "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,         //отображаемое количество на странице
    totalUsersCount: 0,  //общее число на сервере
    currentPage: 1,       //начальная страница
    isFetching: false     //получение ответа от сервира
}

export const usersReducer = (state: UsersPageType = initialState,
                             action: UsersActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                //users: [...state.users, ...action.users]  //???
                users: action.users
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const follow = (userId: string) => {  //были AC, удали для дальнейшего сокпащения в mapDispatchTo Props
    return {
        type: "FOLLOW",
        userId: userId

    } as const
}

export const unfollow = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount: totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching: isFetching
    } as const
}

type FollowActionType = ReturnType<typeof follow>  //были AC, удали для дальнейшего сокпащения в mapDispatchTo Props
type UnfollowActionType = ReturnType<typeof unfollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>