import React from 'react';
import {render, screen} from '@testing-library/react';
import {App} from './App';

export type MessagesType = {
    id: number,
    message: string
}

export type DialogsType = {
    id: number,
    name: string,
}

export type DialogPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[]
}

export type PostsType = {
    id: number,
    message: string,
    likesCounts: number
}

export type ProfilePageType = {
    posts: PostsType[]
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogPage: DialogPageType
}

export const state: StateType = {
    profilePage : {
        posts : [
            {id: 1, message: "Yo", likesCounts: 3},
            {id: 2, message: ":)", likesCounts: 3},
            {id: 3, message: "I is good", likesCounts: 3},
            {id: 4, message: "Yo", likesCounts: 3},
            {id: 5, message: "Yo", likesCounts: 3},]
    },
    dialogPage : {
        dialogs : [
            {id: 1, name: "Alex"},
            {id: 2, name: "Igor"},
            {id: 3, name: "Kostia"},
            {id: 4, name: "leha"},
            {id: 5, name: "Kiril"},
        ],

        messages : [
            {id: 1, message: "Hi"},
            {id: 2, message: "What is you name"},
            {id: 3, message: ")))))"},
        ]
    }
}


test('renders learn react link', () => {
  render(<App state={state}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
