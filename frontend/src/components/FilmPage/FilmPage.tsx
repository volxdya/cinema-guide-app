import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import films from "../../store/films.ts";
import {useParams} from "react-router-dom";
import {MainInfo} from "./MainInfo/MainInfo.tsx";
import {About} from "./About/About.tsx";
import users from "../../store/users.ts";
import {Reviews} from "./Reviews/Reviews.tsx";

const FilmPage = observer(() => {
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            films.getOneFilm(Number(id));
        }

        users.getUserData();

        users.getFullUserData(users.userData.login);
    }, []);

    return (
        <>
            <MainInfo film={films.oneFilm} user={users.fullUserData}/>
            <About film={films.oneFilm}/>
            <Reviews/>
        </>
    );
});

export default FilmPage;