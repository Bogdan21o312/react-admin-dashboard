import {createSlice} from "@reduxjs/toolkit";
import firebase from "firebase/compat/app/dist/compat/app";

const initialState = {
    firebase,
    auth: firebase.auth(),
    firestore: firebase.firestore()
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isState(state) {
            state.firebase
            state.auth
            state.firestore
        }
    }
})

export const {isState} = authSlice.actions;
export default authSlice.reducer;