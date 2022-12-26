import {useLayoutEffect} from 'react';
import {setTheme} from "../store/slices/themeSlice";
import {useAppDispatch, useAppSelector} from "./redux";

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.theme);

    const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

    useLayoutEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
    }, [theme]);

    return [theme, toggleTheme]
}
