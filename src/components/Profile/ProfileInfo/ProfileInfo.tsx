import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileInfoType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType ={
    profileInfo: ProfileInfoType | null
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div className={classes.content}>
            <div><img
                src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
                alt="fon"/>
            </div>
            <img src={props.profileInfo?.photos.large} alt={"ava"}/>
            <div>{props.profileInfo?.fullName}</div>
            <div>{props.profileInfo?.userId}</div>
            <div>{props.profileInfo?.aboutMe}</div>
            <div className={classes.profileBlock}>😎</div>

        </div>
    );
}