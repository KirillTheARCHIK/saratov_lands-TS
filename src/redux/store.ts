import { configureStore, Action } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";


export interface ActionWithPayload extends Action {
    payload: any;
}

export const store = configureStore({
    reducer: {
        authReducer,
    },
});