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
        axios.post(`${import.meta.env.VITE_API_URL}/user/check_films_like`, {
            userId: users.userData.id,
            filmId: film.random.id
        }).then((response) => {
            setIsLike(response.data);
        }).catch(err => {
            console.log(err);
        });
    }, [film.random.id, users.fullUserData.favorites, isLike]);


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
                            <Link to={"/film/" + film.random.id}>
                                <button className="dark-btn">О фильме</button>
                            </Link>
                            {isLike ? (
                                <button className="dark-btn" onClick={() => {
                                    deleteFavorite(film.random.id, users.userData.id);
                                    setIsLike(false);
                                }}>
                                    <ShadedHeart/>
                                </button>
                            ) : (
                                <button className="dark-btn"
                                        onClick={() => {
                                            addFavorites(film.random.id, users.userData.id);
                                            setIsLike(true);
                                        }}>
                                    <Heart/>
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
    );
});