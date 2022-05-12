import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { ActionWithPayload } from "../store";
import { loginAction, LoginActionPayload, logoutAction } from "./actions";
import { User } from "./User";


interface AuthState {
    user?: User;
}

export const authReducer = createReducer<AuthState>({}, (builder) => {
    builder
        .addCase(loginAction.type, (state, action: PayloadAction<LoginActionPayload, "LOGIN">) => {
            state.user = action.payload.user;
        })
        .addCase(logoutAction.type, (state, action) => {
            state.user = undefined;
        })
});