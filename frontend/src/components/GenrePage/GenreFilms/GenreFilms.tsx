import {Link, useParams} from "react-router-dom";
import films from "../../../store/films.ts";
import {FilmCard} from "../../../ui/FilmCard/FilmCard.tsx";
import {film} from "../../../interfaces/api/film.ts";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {LeftArrowIcon} from "../../../icons/LeftArrow.tsx";

const GenreFilms = observer(() => {
    const {title} = useParams();

    useEffect(() => {
        if (title) {
            films.getByGenre(title);
        }
    }, []);

    return (
        <div className="main-container mt-5">
            <div className="d-flex gap-xl-3 gap-2 align-items-center mb-5 title-films-block">
                <Link to="/genres">
                    <span className="films-back">
                        <LeftArrowIcon/>
                    </span>
                </Link>
                <h1 className="title-genre">{title}</h1>
            </div>
            <div className="d-flex gap-5 mt-5 flex-wrap mx-xl-0 mx-5">
                {films.genreFilms.map((item: film, index: number) => {
                    return <FilmCard key={item.id} title={item.title} id={item.id} image={item.image} index={index}/>
                })}
            </div>
        </div>
    );
});

export default GenreFilms;