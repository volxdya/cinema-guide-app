import * as Yup from 'yup';
import {IFilm} from "../interfaces/validation/film.ts";

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
const revenue = Yup
    .string()
    .required("Введите выручку")
    .min(100000, "Введите корректный год")
    .max(1000000000, "Введите корректный год");

const budget = Yup
    .string()
    .required("Введите выручку")
    .min(5000, "Введите корректное число")
    .max(1000000000, "Введите корректное число");

const time = Yup
    .string()
    .required("Введите длительность фильма")
    .min(10, "Введите корректное число")
    .max(48 * 60, "Введите корректное число");

export const schemas = {
    custom: Yup.object().shape({
        title,
        description,
        budget,
        revenue,
        time
    })
}

export const initialState: IFilm = {
    title: "",
    description: "",
    revenue: 5000,
    time: 30,
    budget: 5000
}
