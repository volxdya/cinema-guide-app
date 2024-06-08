import axios from "axios";

export async function register(login: string, password: string, firstName: string, lastName: string) {
    await axios.post(`${import.meta.env.VITE_API_URL}/user/create`, {
        login: login,
        password: password,
        firstName: firstName,
        lastName: lastName,
    }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
}