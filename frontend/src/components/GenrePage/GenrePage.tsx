import {GenreCard} from "../../ui/GenreCard/GenreCard.tsx";
import './GenrePage.css';
import {useEffect} from "react";
import genres from "../../store/genres.ts";
import {observer} from "mobx-react-lite";
import {genre} from "../../interfaces/api/genre.ts";
import uniqid from "uniqid";

export const GenrePage = observer(() => {

    useEffect(() => {
        genres.getAllGenres();
    }, []);

    return (
        <div className="main-container genre-page">
            <h1 className="mt-2 mb-5 text-xl-start text-center genre-title">Жанры</h1>
            <div className="d-flex gap-3 flex-wrap justify-content-xl-start justify-content-center">
                {genres.genres.map((item: genre) => {
                    return (
                        <GenreCard id={item.id} title={item.title} image={item.image} key={uniqid()}/>
                    );
                })}
            </div>

        </div>
    );
});