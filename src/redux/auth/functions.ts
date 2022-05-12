import { Dispatch } from "react";
import { MyRequest } from "../../http/http";
import { loginAction } from "./actions"
import { User } from "./User"

export class AuthFunctions {
    static async login(dispatch: Dispatch<any>, login: string, password: string) {
        let user = await MyRequest.login(login, password);

        dispatch(loginAction(user));
    }
}