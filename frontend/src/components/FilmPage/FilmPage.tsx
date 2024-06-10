import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import films from "../../store/films.ts";
import {useParams} from "react-router-dom";
import './FilmPage.css';
import {MainInfo} from "./MainInfo/MainInfo.tsx";
import {About} from "./About/About.tsx";
import users from "../../store/users.ts";

export const FilmPage = observer(() => {
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            films.getOneFilm(Number(id));
        }

        users.getUserData();
    }, []);

    return (
        <>
            <MainInfo film={films.oneFilm} user={users.userData}/>
            <About film={films.oneFilm}/>
        </>
    );
});