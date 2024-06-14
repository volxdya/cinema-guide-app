import * as Yup from 'yup';

interface IInitialState {
    login: string;
    password: string;
}

/*const REGX = {
    name: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/
}*/

const login = Yup
    .string()
    .required("Введите логин")
    .min(3, "Слишком короткий логин")
    .max(20, "Слишком длинный логин");
const password = Yup
    .string()
    .required("Введите пароль")
    .min(3, "Слишком короткий пароль")
    .max(20, "Слишком длинный пароль");

export const schemas = {
    custom: Yup.object().shape({
        login,
        password
    })
}

export const initialState: IInitialState = {
    login: "",
    password: ""
}
