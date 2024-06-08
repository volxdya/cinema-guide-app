import axios from "axios";
import {setItem} from "../../utils/localStorage.ts";

export async function auth(login: string, password: string){
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        login: login,
        password: password,
    }).then(res => {
        setItem("token", res.data.token);
    }).catch(err => {
        console.log(err);
    });
}