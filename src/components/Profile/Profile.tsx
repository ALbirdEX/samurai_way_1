import React from 'react';
import classes from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/profile-reducer";

type ProfilePropsType ={
    profileInfo: ProfileInfoType | null
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <MyPostsContainer
                /*posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}*//>
        </div>
    );
}