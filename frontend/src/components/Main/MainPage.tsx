import {observer} from "mobx-react-lite";
import './MainPage.css';
import {RandomFilm} from "./Random/RandomFilm.tsx";
import {TopFilms} from "./Top/TopFilms.tsx";
import films from "../../store/films.ts";
import {useEffect} from "react";

export const MainPage = observer(() => {
    useEffect(() => {
        films.getTenFilms();
    }, []);

    return (
        <>
            <RandomFilm/>
            <TopFilms films={films.films}/>
        </>
    );
});