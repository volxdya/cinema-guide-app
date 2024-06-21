import './ReviewCard.css';
import {getFirstSymbol} from "../../utils/getFirstSymbol.ts";

interface Props {
    text: string;
    firstName: string;
    lastName: string;
    rating: number;
}

export function ReviewCard({text, firstName, lastName,rating}: Props) {
    return (
        <div className="review-container my-5">
            <div className="review d-flex gap-3">
                <div className="p-2">
                    <p className="avatar-review">
                        {getFirstSymbol(firstName)}
                        {getFirstSymbol(lastName)}
                    </p>
                </div>
                <div className="d-flex align-items-center p-2">
                    <div className="user-data-review">
                        <h4 className="m-0">{firstName} {lastName}</h4>
                        <p className="pt-2 date-review">12.04.2023</p>
                    </div>
                </div>
                <div className="ms-auto p-2 rating-film-user pe-5 d-flex align-items-center">{rating}</div>
            </div>
            <p className="text-review p-2">{text}</p>
        </div>
    )
}