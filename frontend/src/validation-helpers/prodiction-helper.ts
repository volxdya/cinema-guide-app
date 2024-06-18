import * as Yup from 'yup';
import {IProduction} from "../interfaces/validation/production.ts";

/*const REGX = {
    name: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/
}*/

const title = Yup
    .string()
    .required("Введите название")
    .min(3, "Слишком короткое нзавание")
    .max(20, "Слишком длинное название");
const description = Yup
    .string()
    .required("Введите пароль")
    .min(3, "Слишком короткое описание")
    .max(20, "Слишком длинное описание");

export const schemas = {
    custom: Yup.object().shape({
        title,
        description
    })
}

export const initialState: IProduction = {
    title: "",
    description: ""
}
