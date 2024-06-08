import {FilmCard} from "../../../ui/FilmCard/FilmCard.tsx";
import {useEffect} from "react";
import films from "../../../store/films.ts";
import {film} from "../../../interfaces/film.ts";

export function TopFilms() {

    useEffect(() => {
        films.getTenFilms();
    }, );

    return (
        <div className="main-container mt-5">
            <h1>Топ 10 фильмов</h1>
            <div className="d-flex gap-5 mt-5 flex-wrap">
                {films.films.map((item: film, index: number) => {
                    return <FilmCard id={item.id} title={item.title} image={item.image} index={index}  />;
                })}
            </div>
        </div>
    );
}