import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import films from "../../store/films.ts";
import {useParams} from "react-router-dom";
import './FilmPage.css';
import {MainInfo} from "./MainInfo/MainInfo.tsx";
import {About} from "./About/About.tsx";

export const FilmPage = observer(() => {
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            films.getOneFilm(Number(id));
        }
    }, []);

    return (
        <>
            <MainInfo film={films.oneFilm}/>
            <About film={films.oneFilm}/>
        </>
    );
});