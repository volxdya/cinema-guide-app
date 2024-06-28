import {film} from "../interfaces/api/film.ts";

export function checkFilmRating(film: film): number {
    let ratingArray: number[] = [];

    let rating: number = 0;

    if (film.reviews) {
        for (let i = 0; i < film.reviews.length; i++) {
            ratingArray.push(film.reviews[i].rating);
        }
    }

    for (let i = 0; i < ratingArray.length; i++){
        rating += ratingArray[i];
    }

    if (ratingArray.length > 0){
        return Number((rating / ratingArray.length).toFixed(1));
    }

    return rating;
}