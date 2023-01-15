import React from 'react';
import classes from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

/*type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}*/

export function Profile() {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer
                /*posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}*//>
        </div>
    );
}