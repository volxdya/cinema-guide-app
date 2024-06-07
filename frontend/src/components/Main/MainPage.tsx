import {observer} from "mobx-react-lite";
import './MainPage.css';
import {RandomFilm} from "./Random/RandomFilm.tsx";
import {FilmCard} from "../../ui/FilmCard/FilmCard.tsx";

export const MainPage = observer(() => {

    return (
        <>
            <div className="wrapper">
                <RandomFilm/>
            </div>

            <div className="main-container mt-5">
                <h1>Топ 10 фильмов</h1>
                <div className="d-flex gap-5 mt-5 flex-wrap">
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                </div>
            </div>
        </>
    );
});