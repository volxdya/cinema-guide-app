import {Star} from "../../icons/Star.tsx";
import './FilmCardSearch.css'
import {Link, useNavigate} from "react-router-dom";

interface Props {
    rating: number;
    time: number;
    year: number;
    image: string;
    title: string;
    id: number;
}

export function FilmCardSearch({rating, image, time, year, title, id}: Props) {

    let classNameRating = '';

    if (rating < 5) {
        classNameRating = 'bad-rating';
    } else if (rating >= 5 && rating < 7.5) {
        classNameRating = 'normal-rating'
    } else if (rating >= 7.5 && rating < 8.6) {
        classNameRating = 'good-rating'
    } else {
        classNameRating = 'great-rating'
    }

    const navigate = useNavigate();

    function redicrect() {
        navigate(`/film/${id}`);

        window.location.reload();
    }

    return (
        <div className="d-flex gap-2 mt-3 film-card-search" data-bs-dismiss="modal" onClick={() => redicrect()}>
            <img
                src={image}
                alt={"Картинка фильма " + title}
                className="img-card-search"
            />
            <div className="mx-4">
                <div className="d-flex gap-3">
                    <span className={classNameRating + " rating-film"}>
                    <Star/>
                    <span className="px-1">
                        {rating}
                    </span>
                </span>
                    <span className="stats-text">{year}</span>
                    <span className="stats-text">{time} минут</span>
                </div>
                <p className="mt-1">{title}</p>
            </div>
        </div>
    );
}