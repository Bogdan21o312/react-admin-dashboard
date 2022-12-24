import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import {ERROR_URL, HOME_URL} from "./config";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_URL} element={<Home/>}/>
            <Route path={ERROR_URL} element={<Error/>}/>
            <Route
                path="*"
                element={<Navigate to={ERROR_URL} replace/>}
            />
        </Routes>
    );
};

export default AppRouter;