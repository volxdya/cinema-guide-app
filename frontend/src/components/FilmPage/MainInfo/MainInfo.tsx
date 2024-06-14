import {Star} from "../../../icons/Star.tsx";
import {Heart} from "../../../icons/Heart.tsx";
import {film} from "../../../interfaces/api/film.ts";
import {addFavorites, deleteFavorite} from "../../../api/favorites/favorites.ts";
import {user} from "../../../interfaces/api/user.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import users from "../../../store/users.ts";
import {ShadedHeart} from "../../../icons/ShadedHeart.tsx";
import {getItem} from "../../../utils/localStorage.ts";
import './MainInfo.css';

interface Props {
    film: film;
    user: user;
}

export const MainInfo = ({film, user}: Props) => {

    let classNameRating = '';

    if (true) {
        if (film.rating < 5) {
            classNameRating = 'bad-rating';
        } else if (film.rating >= 5 && film.rating < 7.5) {
            classNameRating = 'normal-rating'
        } else if (film.rating >= 7.5 && film.rating < 8.6) {
            classNameRating = 'good-rating'
        } else {
            classNameRating = 'great-rating'
        }
    }

    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        if (getItem("token")) {
            axios.post(`${import.meta.env.VITE_API_URL}/user/check_films_like`, {
                userId: user.id,
                filmId: film.id
            }, {
                headers: {
                    Authorization: `Bearer ${getItem("token")}`
                }
            }).then((response) => {
                setIsLike(response.data);
            }).catch(err => {
                console.log(err);
            });
        }
    });

    return (
        <div className="wrapper" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${film.image})`,
        }}>
            <div className="main-container main-content-random">
                <div className="col-xl-5 col-12 random-film">
                    <div className="container-sm">
                        <div className="statistics d-flex gap-4">
                        <span className={classNameRating + ' rating-film'}>
                            <Star/>
                            <span className="px-1">
                                {film.rating}
                            </span>
                        </span>
                            <span className="stats-text">{film.year}</span>
                            <span className="stats-text">заглушка</span>
                            <span className="stats-text">{film.time} минут</span>
                            {/*<span className="stats-text">{randomFilm.random.productions[0].title}</span>*/}
                        </div>
                        <div className="main-title-film mt-xl-4 mt-3">
                            <h2>{film.title}</h2>
                            <p className="description-film mt-xl-3 mt-1">{film.description}</p>
                        </div>
                        <div className="buttons-film d-flex gap-3 mt-5">
                            <button className="purple-btn trailer-btn">Трейлер</button>
                            {isLike ? (
                                <button className="dark-btn" onClick={() => {
                                    if (getItem("token")) {
                                        deleteFavorite(film.id, users.userData.id);
                                        setIsLike(false);
                                    }
                                }}>
                                    <ShadedHeart/>
                                </button>
                            ) : (
                                <button className="dark-btn" onClick={() => {
                                    if (getItem("token")) {
                                        addFavorites(film.id, users.userData.id);
                                        setIsLike(true);
                                    }
                                }}>
                                    <Heart/>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};