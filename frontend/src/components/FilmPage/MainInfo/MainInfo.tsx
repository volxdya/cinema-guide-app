import {film} from "../../../interfaces/api/film.ts";
import {user} from "../../../interfaces/api/user.ts";
import './MainInfo.css';
import {MainInfoFilm} from "../../Main/Random/MainInfo/MainInfoFilm.tsx";
import {MainInfoFilmControls} from "./MainInfoFilmControls/MainInfoFilmControls.tsx";

interface Props {
    film: film;
    user: user;
}

export const MainInfo = ({film, user}: Props) => {

    return (
        <div className="wrapper" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${film.image})`,
        }}>
            <div className="main-container main-content-random">
                <div className="col-xl-5 col-12 random-film">
                    <div className="container-sm">
                        <MainInfoFilm film={film} />
                        <MainInfoFilmControls film={film} user={user}/>
                    </div>
                </div>
            </div>
        </div>
    );
};