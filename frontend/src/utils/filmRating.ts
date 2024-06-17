import {film} from "../interfaces/api/film.ts";

let classNameRating = "";

export function getFilmRating(film: film) {
    if (film.rating < 5) {
        classNameRating = 'bad-rating';
    } else if (film.rating >= 5 && film.rating < 7.5) {
        classNameRating = 'normal-rating'
    } else if (film.rating >= 7.5 && film.rating < 8.6) {
        classNameRating = 'good-rating'
    } else {
        classNameRating = 'great-rating'
    }

    return classNameRating;
}