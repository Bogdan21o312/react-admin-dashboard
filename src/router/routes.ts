import {HOME_URL, LOGIN_URL, REGISTER_URL} from "./config";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";

export const publicRoutes = [
    {
        path: LOGIN_URL,
        Component: LoginPage
    },
    {
        path: REGISTER_URL,
        Component: RegisterPage
    }
]

export const privateRoutes = [
    {
        path: HOME_URL,
        Component: HomePage
    }
]
