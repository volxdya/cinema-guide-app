import './Reviews.css';
import {ReviewCard} from "../../../ui/ReviewCard/ReviewCard.tsx";

export function Reviews() {
    return (
        <div className="main-container mt-5">
            <h1 className="pb-5">Отзывы</h1>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>

        </div>
    );
}