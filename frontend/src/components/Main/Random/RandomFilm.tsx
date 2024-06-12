import {Heart} from "../../../icons/Heart.tsx";
import {Reroll} from "../../../icons/Reroll.tsx";
import './RandomFilm.css';
import {Star} from "../../../icons/Star.tsx";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import film from "../../../store/films.ts";
import {Link} from "react-router-dom";
import {addFavorites, deleteFavorite} from "../../../api/favorites/favorites.ts";
import users from "../../../store/users.ts";
import axios from "axios";
import {ShadedHeart} from "../../../icons/ShadedHeart.tsx";
import {getItem} from "../../../utils/localStorage.ts";

export const RandomFilm = observer(() => {

    let classNameRating = "";

    if (true) {
        if (film.random.rating < 5) {
            classNameRating = 'bad-rating';
        } else if (film.random.rating >= 5 && film.random.rating < 7.5) {
            classNameRating = 'normal-rating'
        } else if (film.random.rating >= 7.5 && film.random.rating < 8.6) {
            classNameRating = 'good-rating'
        } else {
            classNameRating = 'great-rating'
        }
    }

    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        film.getRandom();

        users.getUserData();
    }, []);

    useEffect(() => {
        if (getItem("token")) {
            axios.post(`${import.meta.env.VITE_API_URL}/user/check_films_like`, {
                userId: users.userData.id,
                filmId: film.random.id
            }).then((response) => {
                setIsLike(response.data);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [film.random.id]);

    return (
        <div className="wrapper" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${film.random.image})`,
        }}>
            <div className="main-container main-content-random">
                <div className="col-xl-5 col-12 random-film">
                    <div className="container-sm">
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
                            {/*<span className="stats-text">{randomFilm.random.productions[0].title}</span>*/}
                        </div>
                        <div className="main-title-film mt-xl-4 mt-3">
                            <h2>{film.random.title}</h2>
                            <p className="description-film mt-xl-3 mt-1">{film.random.description}</p>
                        </div>
                        <div className="buttons-film d-xl-flex gap-3 mt-xl-5 mt-4">
                            <button className="purple-btn trailer-btn">Трейлер</button>
                            <div className="d-flex justify-content-between mt-xl-0 mt-3 gap-xl-3">
                                <Link to={"/film/" + film.random.id}>
                                    <button className="dark-btn">О фильме</button>
                                </Link>

                                {isLike ? (
                                    <button className="dark-btn" onClick={() => {
                                        if (getItem("token")) {
                                            deleteFavorite(film.random.id, users.userData.id);
                                            setIsLike(false);
                                        }
                                    }}>
                                        {getItem("token") ? (
                                            <>
                                                <ShadedHeart/>
                                            </>
                                        ) : (
                                            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <ShadedHeart/>
                                            </button>
                                        )}
                                    </button>
                                ) : (
                                    <button className="dark-btn"
                                            onClick={() => {
                                                if (getItem("token")) {
                                                    addFavorites(film.random.id, users.userData.id);
                                                    setIsLike(true);
                                                }
                                            }}
                                    >
                                        {getItem("token") ? (
                                            <>
                                                <Heart/>
                                            </>
                                        ) : (
                                            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <Heart/>
                                            </button>
                                        )}
                                    </button>
                                )}

                                <button className="dark-btn" onClick={() => film.getRandom()}>
                                    <Reroll/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});