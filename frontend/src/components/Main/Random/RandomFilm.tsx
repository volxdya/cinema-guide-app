import './RandomFilm.css';
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import film from "../../../store/films.ts";
import users from "../../../store/users.ts";
import {MainInfoFilm} from "./MainInfo/MainInfoFilm.tsx";
import {ControlsRandom} from "./Controls/Controls.tsx";

export const RandomFilm = observer(() => {


    useEffect(() => {
        film.getRandom();
        users.getUserData();
    }, []);


    return (
        <div className="wrapper" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${film.random.image})`,
        }}>
            <div className="main-container main-content-random">
                <div className="col-xl-5 col-12 random-film">
                    <div className="container-sm">
                        <MainInfoFilm film={film.random}/>
                        <ControlsRandom films={film.random}/>
                    </div>
                </div>
            </div>
        </div>
    );
});