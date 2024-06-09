import {makeAutoObservable} from "mobx";
import {user} from "../interfaces/user.ts";
import {getItem} from "../utils/localStorage.ts";

import { jwtDecode } from "jwt-decode";

class Users {

    constructor() {
        makeAutoObservable(this);
    }


    userData: user = {
        firstName: "", id: 0, lastName: "", login: "", password: "", roleTitle: ""
    }

    getUserData() {
        const decoded = jwtDecode(getItem('token'));

        this.userData.id = decoded.id;
        this.userData.firstName = decoded.firstName;
        this.userData.lastName = decoded.lastName;
        this.userData.login = decoded.login;
        this.userData.roleTitle = decoded.roleTitle;

        console.log(decoded);

    }
}

export default new Users();