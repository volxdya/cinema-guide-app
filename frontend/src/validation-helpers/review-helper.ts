import * as Yup from 'yup';
import {IReview} from "../interfaces/validation/review.ts";

/*const REGX = {
    name: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/
}*/

const review = Yup
    .string()
    .required("Введите логин")
    .min(3, "Слишком короткий отзвы")
    .max(20, "Слишком длинный отзвы");

export const schemas = {
    custom: Yup.object().shape({
        review,
    })
}

export const initialState: IReview = {
    review: "",
}
