import * as Yup from 'yup';
import {IRegister} from "../interfaces/validation/register.ts";

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

const firstName = Yup
    .string()
    .required("Введите имя")
    .min(1, "Слишком коротое имя")
    .max(15, "Слишком длинное имя");

const lastName = Yup
    .string()
    .required("Введите фамилию")
    .min(1, "Слишком короткая фамилия")
    .max(15, "Слишком длинная фамилия");

const secondPassword = Yup
    .string()
    .required("Подтвердите пароль")
    .min(3, "")
    .max(20, "Слишком длинный пароль");

export const schemas = {
    custom: Yup.object().shape({
        login,
        password,
        firstName,
        lastName,
        secondPassword
    })
}

export const initialState: IRegister = {
    login: "",
    password: "",
    firstName: "",
    lastName: "",
    secondPassword: ""
}
