import './Reviews.css';
import {ReviewCard} from "../../../ui/ReviewCard/ReviewCard.tsx";
import {ReviewForm} from "./Form.tsx";

export function Reviews() {
    return (
        <div className="main-container mt-5">
            <h1 className="pb-5">Отзывы</h1>
                <ReviewForm/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>

        </div>
    );
}