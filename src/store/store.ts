import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {testAPI} from "../sevices/test";
import {themeReducer} from "./slices/themeSlice";

const rootReducer = combineReducers({
    [testAPI.reducerPath]: testAPI.reducer,
    theme: themeReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
