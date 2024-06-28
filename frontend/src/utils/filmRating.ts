
let classNameRating = "";

export function getFilmRating(rating: number): string {
    if (rating < 5) {
        classNameRating = 'bad-rating';
    } else if (rating >= 5 && rating < 7.5) {
        classNameRating = 'normal-rating'
    } else if (rating >= 7.5 && rating < 8.6) {
        classNameRating = 'good-rating'
    } else {
        classNameRating = 'great-rating'
    }

    return classNameRating;
}