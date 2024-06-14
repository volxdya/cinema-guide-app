import {FilmCard} from "../../../ui/FilmCard/FilmCard.tsx";
import {film} from "../../../interfaces/api/film.ts";
import {useEffect} from "react";
import films from "../../../store/films.ts";
import {observer} from "mobx-react-lite";
import uniqid from 'uniqid';
import './TopFilms.css';

export const TopFilms = observer(() => {
    useEffect(() => {
        films.getTenFilms();
    }, []);

    return (
        <div className="main-container mt-5 top">
            <h1 className="text-center">Топ 10 фильмов</h1>
            <div className="d-flex gap-5 mt-5 flex-wrap jusyify-content-center mx-xl-0 mx-5">
                {films.films.map((item: film, index: number) => {
                    return <FilmCard id={item.id} title={item.title} image={item.image} index={index} key={uniqid()}  />;
                })}
            </div>
        </div>
    );
});