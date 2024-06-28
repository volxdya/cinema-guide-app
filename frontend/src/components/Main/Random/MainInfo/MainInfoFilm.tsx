import {Star} from "../../../../icons/Star.tsx";
import {film} from "../../../../interfaces/api/film.ts";
import {getFilmRating} from "../../../../utils/filmRating.ts";
import {checkFilmRating} from "../../../../utils/checkFilmRating.ts";

interface Props {
    film: film
}

export function MainInfoFilm({film}: Props) {

    const rating = checkFilmRating(film);

    const classNameRating = getFilmRating(rating);

    return (
        <>
            <div className="statistics d-flex gap-4">
                            <span className={classNameRating + ' rating-film'}>
                                <Star/>
                                <span className="px-1">
                                    {rating}
                                </span>
                            </span>
                <span className="stats-text">{film.year}</span>
                <span className="stats-text">{film.time} минута</span>
                {/*<span className="stats-text">{randomFilm.random.productions[0].title}</span>*/}
            </div>
            <div className="main-title-film mt-xl-4 mt-3">
                <h2>{film.title}</h2>
                <p className="description-film mt-xl-3 mt-1">{film.description}</p>
            </div>
        </>
    );
}