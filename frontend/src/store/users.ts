import {makeAutoObservable} from "mobx";
import {user} from "../interfaces/user.ts";
import {getItem} from "../utils/localStorage.ts";

import {jwtDecode, JwtPayload} from "jwt-decode";
import axios from "axios";

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
        firstName: "", id: 0, lastName: "", login: "", password: "", roleTitle: "", favorites: []
    }

    fullUserData: user = {
        firstName: "", id: 0, lastName: "", login: "", password: "", roleTitle: "", favorites: []
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

    getFullUserData(login: string) {
        axios.get(`http://localhost:${import.meta.env.VITE_API_PORT}/user/get_by_login/${login}`).then(res => {
            this.fullUserData = res.data;

            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }
}

export default new Users();