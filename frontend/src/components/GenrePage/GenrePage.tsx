import {GenreCard} from "../../ui/GenreCard/GenreCard.tsx";
import './GenrePage.css';


export function GenrePage(){
    return (
        <div className="main-container genre-page">
            <div className="d-flex gap-3 flex-wrap">
                <GenreCard/>
            </div>

        </div>
    );
}