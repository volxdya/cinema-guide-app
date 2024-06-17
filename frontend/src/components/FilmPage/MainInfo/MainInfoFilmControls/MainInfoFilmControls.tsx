import Modal from "../../../../store/modal.ts";
import {getItem} from "../../../../utils/localStorage.ts";
import {ShadedHeart} from "../../../../icons/ShadedHeart.tsx";
import {Heart} from "../../../../icons/Heart.tsx";
import {addFavorites, deleteFavorite} from "../../../../api/favorites/favorites.ts";
import users from "../../../../store/users.ts";
import {useEffect, useState} from "react";
import {film} from "../../../../interfaces/api/film.ts";
import axios from "axios";
import {user} from "../../../../interfaces/api/user.ts";

interface Props {
    film: film;
    user: user;
}

export function MainInfoFilmControls({film, user}: Props) {

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

    function handleClickHeart() {
        if (getItem("token")) {
            if (isLike) {
                deleteFavorite(film.id, users.userData.id);
                setIsLike(!isLike);
            } else {
                addFavorites(film.id, users.userData.id);
                setIsLike(!isLike);
            }
        }
    }

    return (
        <div className="buttons-film d-flex gap-3 mt-5">
            <button className="purple-btn trailer-btn" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" onClick={() => Modal.setCurrent("trailer")}>Трейлер
            </button>
            <button className="dark-btn" onClick={handleClickHeart}>
                {getItem("token") ? (
                    <>
                        {isLike ? (
                            <ShadedHeart/>
                        ) : (
                            <Heart/>
                        )}
                    </>
                ) : (
                    <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <Heart/>
                    </button>
                )}
            </button>
        </div>
    );
}