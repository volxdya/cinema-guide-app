import Modal from "../../../../store/modal.ts";
import {Link} from "react-router-dom";
import {getItem} from "../../../../utils/localStorage.ts";
import {ShadedHeart} from "../../../../icons/ShadedHeart.tsx";
import {Heart} from "../../../../icons/Heart.tsx";
import {Reroll} from "../../../../icons/Reroll.tsx";
import {film} from "../../../../interfaces/api/film.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import users from "../../../../store/users.ts";
import filmRandom from '../../../../store/films.ts';
import {addFavorites, deleteFavorite} from "../../../../api/favorites/favorites.ts";
import {observer} from "mobx-react-lite";

interface Props {
    films: film;
}

export const ControlsRandom = observer(({films}: Props) => {
    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        filmRandom.getRandom();
        users.getUserData();
    }, []);

    useEffect(() => {
        if (getItem("token")) {
            axios.post(`${import.meta.env.VITE_API_URL}/user/check_films_like`, {
                userId: users.userData.id,
                filmId: films.id
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
    }, [films.id]);

    function handleClickHeart() {
        if (getItem("token")) {
            if (isLike) {
                deleteFavorite(films.id, users.userData.id);
                setIsLike(!isLike);
            } else {
                addFavorites(films.id, users.userData.id);
                setIsLike(!isLike);
            }
        }
    }


    return (
        <div className="buttons-film d-xl-flex gap-3 mt-xl-5 mt-4">
            <button className="purple-btn trailer-btn" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" onClick={() => Modal.setCurrent("trailer")}>Трейлер
            </button>
            <div className="d-flex justify-content-between mt-xl-0 mt-3 gap-xl-3">
                <Link to={"/film/" + films.id}>
                    <button className="dark-btn">О фильме</button>
                </Link>

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


                <button className="dark-btn" onClick={() => filmRandom.getRandom()}>
                    <Reroll/>
                </button>
            </div>
        </div>
    );
});