import * as Yup from 'yup';
import {IEdit} from "../../../interfaces/validation/edit.ts";

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
    .min(3, "Слишком короткий пароль")
    .max(20, "Слишком длинный пароль");

export const schemas = {
    custom: Yup.object().shape({
        firstName,
        lastName,
        password,
        secondPassword,
    })
}

export const initialState: IEdit = {
    firstName: "",
    lastName: "",
    secondPassword: "",
    password: "",
}
