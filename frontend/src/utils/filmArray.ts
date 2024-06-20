export interface IFilmFields {
    placeholder: string;
    field: Array<number>;
}

export let years: Array<number> = [];
export let ratings: Array<number> = [];

// позже подгружать с API
export let genres: Array<string> = ["Боевик", "Драма", "Ужасы"];

for (let i = 1901; i <= 2024; i++){
    years.push(i);
}

for (let i = 0; i <= 10; i++){
    ratings.push(i);
}

export const FilmFields: IFilmFields[] = [{
    placeholder: "Выберите год",
    field: years,
}, {
    placeholder: "Выберите рейтинг",
    field: ratings
}];