import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { User } from "../redux/auth/User";
import { db } from "./firebase";


export class MyRequest {
    static async login(login: string, password: string): Promise<User> {
        const UserDB = await getDocs(
            query(
                collection(db, 'users'),
                where('login', '==', login),
                where('password', '==', password),
            )
        ).then((value) => {
            return value.size == 0 ? null : value.docs[0];
        });
        if (UserDB != null) {
            return {
                id: UserDB.id,
                login: UserDB.data()['login'],
                password: UserDB.data()['password'],
                name: UserDB.data()['name'],
            };
        }
        throw new Error("wrong login or password");
    }
}