import {useLayoutEffect} from 'react';
import {setTheme} from "../store/slices/themeSlice";
import {useAppDispatch, useAppSelector} from "./redux";
import {RootState} from "../store/store";

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state: RootState | any) => state.theme);

    const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

    useLayoutEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', theme)
    }, [theme]);

    return [theme, toggleTheme]
}
