import React from 'react';
import {Posts} from "./Post/Posts";

export function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea>input</textarea>
                <button>Add POST</button>
            </div>
            <div>New post</div>
            <div>
                <Posts message="Yo" likesCounts={3}/>
                <Posts message="I is good" likesCounts={2}/>
                <Posts message=":)" likesCounts={5}/>
            </div>
        </div>
    );
}