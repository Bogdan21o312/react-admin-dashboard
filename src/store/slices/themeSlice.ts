import { createSlice } from '@reduxjs/toolkit';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'
const themeSlice = createSlice({
  name: '@@theme',
  initialState: localStorage.getItem('app-theme') || defaultTheme,
  reducers: {
    setTheme: (_, action) => action.payload,
  }
});

export const {setTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
