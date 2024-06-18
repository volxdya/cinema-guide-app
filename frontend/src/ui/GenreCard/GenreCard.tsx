import './GenreCard.css';
import {Link} from "react-router-dom";

interface Props {
    title: string,
    image: string;
    id: number;
}

export function GenreCard({title, image}: Props) {
    return (
        <Link to={"/genre/" + title}>
            <div className="main-card">
                <img src={image} alt={"Картинка жанра " + title}/>
                <div className="card-title">
                    <p className="text-center">{title}</p>
                </div>
            </div>
        </Link>
    )
}