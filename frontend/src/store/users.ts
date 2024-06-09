import {makeAutoObservable} from "mobx";
import {user} from "../interfaces/user.ts";
import {getItem} from "../utils/localStorage.ts";

import {jwtDecode, JwtPayload} from "jwt-decode";

// интерфейс, который расширяет jwtpayload
interface loginJwt extends JwtPayload {
    login: string;
    id: number;
    lastName: string;
    firstName: string;
}

class Users {

    constructor() {
        makeAutoObservable(this);
    }


    userData: user = {
        firstName: "", id: 0, lastName: "", login: "", password: "", roleTitle: ""
    }

    getUserData() {
        let decoded: loginJwt;

        const token = getItem("token");

        if (token) {
            decoded = jwtDecode(token);
            this.userData.id = decoded.id;
            this.userData.firstName = decoded.firstName;
            this.userData.lastName = decoded.lastName;
            this.userData.login = decoded.login;
        }
    }
}

export default new Users();