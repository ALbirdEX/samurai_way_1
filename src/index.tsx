import React from 'react';
import './index.css';
import {store} from "./redux/reduxStore";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

