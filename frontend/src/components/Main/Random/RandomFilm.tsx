import {Heart} from "../../../icons/Heart.tsx";
import {Reroll} from "../../../icons/Reroll.tsx";
import './RandomFilm.css';
import {Star} from "../../../icons/Star.tsx";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import film from "../../../store/films.ts";

export const RandomFilm = observer(() => {
    useEffect(() => {
        film.getRandom();
    }, [])


    let classNameRating = '';

    if (film.random.rating < 5) {
        classNameRating = 'bad-rating';
    } else if (film.random.rating >= 5 && film.random.rating < 7.5) {
        classNameRating = 'normal-rating'
    } else if (film.random.rating >= 7.5 && film.random.rating < 8.6) {
        classNameRating = 'good-rating'
    } else {
        classNameRating = 'great-rating'
    }

    return (
        <div className="wrapper" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${film.random.image})`,
        }}>
            <div className="main-container">
                <div className="col-5 random-film">
                    <div>
                        <div className="statistics d-flex gap-4">
                        <span className={classNameRating + ' rating-film'}>
                            <Star/>
                            <span className="px-1">
                                {film.random.rating}
                            </span>
                        </span>
                            <span className="stats-text">{film.random.year}</span>
                            <span className="stats-text">заглушка</span>
                            <span className="stats-text">{film.random.time} минут</span>
                            <span className="stats-text">заглушка</span>
                            {/*<span className="stats-text">{randomFilm.random.productions[0].title}</span>*/}
                        </div>
                        <div className="main-title-film mt-4">
                            <h2>{film.random.title}</h2>
                            <p className="description-film mt-3">{film.random.description}</p>
                        </div>
                        <div className="buttons-film d-flex gap-3 mt-5">
                            <button className="purple-btn">Трейлер</button>
                            <button className="dark-btn">О фильме</button>
                            <button className="dark-btn">
                                <Heart/>
                            </button>
                            <button className="dark-btn" onClick={() => film.getRandom()}>
                                <Reroll/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});