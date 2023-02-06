import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LOGIN_URL} from "../../../router/config";
import {Context} from "../../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import classes from "./Header.moule.scss"
import {useTheme} from "../../../hooks/useTheme";

const Index = () => {
    const [theme, toggleTheme] = useTheme();
    const handleTheme = (e: any) => {
        toggleTheme(e)
    }
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <header className={classes.header}>
            <h1>Welcome</h1>
            {user ?
                <button onClick={() => auth.signOut()}>Выйти</button>
                :
                <Link to={LOGIN_URL}>
                    <button>Логин</button>
                </Link>
            }
            <button onClick={handleTheme}>
                {theme === 'light' ? (
                    <div>light</div>
                ) : (
                    <div>dark</div>
                )}{' '}
                <span>Theme</span>
            </button>
        </header>
    );
};

export default Index;
