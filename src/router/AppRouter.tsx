import React, {useContext, useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";
import {useAuth} from "../hooks/useAuth";

const AppRouter = () => {
    const navigate = useNavigate()
    const {isAuth, email} = useAuth();
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            navigate("/");
        } else {
            navigate("/login");
        }
    }, [user])
    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
            </Routes>
        )
};

export default AppRouter;