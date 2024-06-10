import {Star} from "../../../icons/Star.tsx";
import {Heart} from "../../../icons/Heart.tsx";
import {film} from "../../../interfaces/film.ts";
import {addFavorites} from "../../../api/favorites/favorites.ts";
import {user} from "../../../interfaces/user.ts";

interface Props {
    film: film;
    user: user;
}

export function MainInfo({film, user}: Props) {

    let classNameRating = '';

    if (film.rating < 5) {
        classNameRating = 'bad-rating';
    } else if (film.rating >= 5 && film.rating < 7.5) {
        classNameRating = 'normal-rating'
    } else if (film.rating >= 7.5 && film.rating < 8.6) {
        classNameRating = 'good-rating'
    } else {
        classNameRating = 'great-rating'
    }

    return (
        <div className="wrapper" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${film.image})`,
        }}>
            <div className="main-container">
                <div className="col-5 random-film">
                    <div>
                        <div className="statistics d-flex gap-4">
                        <span className={classNameRating + " rating-film"}>
                            <Star/>
                            <span className="px-1">
                                {film.rating}
                            </span>
                        </span>
                            <span className="stats-text">{film.year}</span>
                            <span className="stats-text">заглушка</span>
                            <span className="stats-text">{film.year} минут</span>
                            <span className="stats-text">заглушка</span>
                            {/*<span className="stats-text">{randomFilm.random.productions[0].title}</span>*/}
                        </div>
                        <div className="main-title-film mt-4">
                            <h2>{film.title}</h2>
                            <p className="description-film mt-3">{film.description}</p>
                        </div>
                        <div className="buttons-film d-flex gap-3 mt-5">
                            <button className="purple-btn">Трейлер</button>
                            <button className="dark-btn" onClick={() => addFavorites(film.id, user.id)}>
                                <Heart/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}