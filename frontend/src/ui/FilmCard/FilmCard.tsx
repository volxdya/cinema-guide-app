import './FilmCard.css';
import {Link} from "react-router-dom";

interface Props {
    image: string;
    title: string;
    id: number;
    index: number;
}

export function FilmCard({image, title, index, id}: Props){
    return (
        <Link to={"/film/" + id}>
            <div className="film-card">
                <span className="top-film-card">{index + 1}</span>
                <img src={image} alt={"Картинка фильма " + title}/>
            </div>
        </Link>
    );
}