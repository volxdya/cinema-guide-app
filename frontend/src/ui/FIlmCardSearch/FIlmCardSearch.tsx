import {Star} from "../../icons/Star.tsx";
import './FilmCardSearch.css'

export function FilmCardSearch() {
    return (
        <div className="d-flex gap-2 mt-3 film-card-search">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoDlHKwE0COpkTc1NWy5jKFZIGGhh8sbmrQ&s"
                alt=""
                className="img-card-search"
            />
            <div className="mx-4">
                <div className="d-flex gap-3">
                                    <span className='good-rating rating-film'>
                                        <Star/>
                                        <span className="px-1">
                                            8.5
                                        </span>
                                    </span>
                    <span className="stats-text">1999</span>
                    <span className="stats-text">69 минут</span>
                </div>
                <p className="mt-1">Спутник</p>
            </div>
        </div>
    );
}