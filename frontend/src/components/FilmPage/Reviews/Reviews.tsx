import './Reviews.css';
import {ReviewForm} from "./Form.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import reviews from "../../../store/reviews.ts";
import {observer} from "mobx-react-lite";
import {Review} from "../../../interfaces/api/review.ts";
import uniqid from "uniqid";
import {ReviewCard} from "../../../ui/ReviewCard/ReviewCard.tsx";

export const Reviews = observer(() => {

    const {id} = useParams();

    let filmId = 0;

    if (id) {
        filmId = Number(id);
    }

    useEffect(() => {
        reviews.getReviews(filmId);
    }, []);

    return (
        <div className="main-container mt-5">
            <h1 className="pb-5">Отзывы</h1>

            <ReviewForm filmId={filmId}/>

            {reviews.reviews.map((item: Review) => {
                return (
                    <ReviewCard
                        key={uniqid()}
                        text={item.text}
                        firstName={item.user.firstName}
                        lastName={item.user.lastName}
                        rating={item.rating}
                    />
                )
            })}

        </div>
    );
});