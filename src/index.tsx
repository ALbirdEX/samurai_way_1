import React from 'react';
import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

const rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <App store = {store}/>
        </BrowserRouter>
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
