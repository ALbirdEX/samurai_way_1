import React from 'react';
import './App.css';
import Header from "./Header";
import {Technologies} from "./Technologies";
import Footer from "./Footer";

export const App = () => {
    return (<div>
        <div><Header/></div>
        <div><Technologies/></div>
        <div><Footer/></div>
    </div>);
}