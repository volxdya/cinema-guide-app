import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import users from "../../../store/users.ts";
import {film} from "../../../interfaces/film.ts";
import {FilmCard} from "../../../ui/FilmCard/FilmCard.tsx";
import uniqid from "uniqid";

export const Favorites = observer(() => {

    useEffect(() => {
        users.getUserData();

        users.getFullUserData(users.userData.login);
    }, []);

    return (
        <div className="d-flex gap-5 flex-wrap">
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
        </div>
    );
});