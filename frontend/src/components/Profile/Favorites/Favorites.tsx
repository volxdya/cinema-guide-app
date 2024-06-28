import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import users from "../../../store/users.ts";
import uniqid from "uniqid";
import {FilmCard} from "../../../ui/FilmCard/FilmCard.tsx";
import {film} from "../../../interfaces/api/film.ts";
import {skTemplate} from "../../../utils/skeletonTemplate.ts";
import {SkeletonFilmCard} from "../../../ui/FilmCard/SkeletonFilmCard.tsx";

export const Favorites = observer(() => {

    useEffect(() => {
        users.getUserData();

        users.getFullUserData(users.userData.login);
    }, []);

    return (
        <div className="d-flex gap-5 flex-wrap justify-content-xl-start justify-content-center">
            {users.fullUserData.favorites.length === 0 ? (
                <h2>Избранных фильмов пока нет</h2>
            ) : (
                <>
                    {!users.fullUserData.favorites ? (
                        <>
                            {skTemplate(10).map(() => {
                                return <SkeletonFilmCard/>;
                            })}
                        </>
                    ) : (
                        <>
                            {users.fullUserData.favorites.map((item: film, index: number) => {
                                return (
                                    <FilmCard
                                        image={item.image}
                                        title={item.title}
                                        id={item.id}
                                        key={uniqid()}
                                        index={index}
                                    />
                                );
                            })}
                        </>
                    )}
                </>
            )}


        </div>
    );
});