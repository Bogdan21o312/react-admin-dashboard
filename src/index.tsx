import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter} from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './firebase'

const store = setupStore()
export const Context = createContext<any | null>(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Context.Provider value={{
                firebase,
                auth,
                firestore
            }}>
                <App/>
            </Context.Provider>
        </Provider>
    </BrowserRouter>
);
