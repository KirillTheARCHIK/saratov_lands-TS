import { createAction } from "@reduxjs/toolkit";
import { User } from "./User";

export interface LoginActionPayload {
    user: User,
}

export const loginAction = createAction('LOGIN', (user: User) => {
    return {
        payload: <LoginActionPayload>{
            user: user,
        }
    };
});
export const logoutAction = createAction('LOGOUT');