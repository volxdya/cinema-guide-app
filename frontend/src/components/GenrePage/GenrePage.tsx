import {GenreCard} from "../../ui/GenreCard/GenreCard.tsx";
import './GenrePage.css';
import {useEffect} from "react";
import genres from "../../store/genres.ts";
import {observer} from "mobx-react-lite";
import {genre} from "../../interfaces/genre.ts";


export const GenrePage = observer(() => {

    useEffect(() => {
        genres.getAllGenres();
    }, []);

    return (
        <div className="main-container genre-page">
            <div className="d-flex gap-3 flex-wrap">
                {genres.genres.map((item: genre) => {
                    return (
                        <GenreCard id={item.id} title={item.title} image={item.image}/>
                    );
                })}
            </div>

        </div>
    );
});