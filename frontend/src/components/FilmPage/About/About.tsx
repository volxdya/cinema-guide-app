import {Dots} from "../../../icons/Dots.tsx";
import {film} from "../../../interfaces/api/film.ts";
import './About.css';


interface Props {
    film: film
}

interface IAboutFilm {
    name: string;
    data: string;
}

export function About({film}: Props) {


    const aboutFilm: IAboutFilm[] = [
        {
            name: "Бюджет",
            data: (film.budget).toString() + '₽'
        },
        {
            name: "Выручка",
            data: (film.revenue).toString() + '₽'
        },
        {
            name: "Режиссер",
            data: "Заглушка"
        },
        {
            name: "Продакшен",
            data: "Заглушка"
        }
    ]

    return (
        <div className="main-container mt-5 about-film-container">
            <h1>О фильме</h1>
            <div>
                <div className="py-3">
                    {aboutFilm.map((item: IAboutFilm) => {
                        return (
                            <div className="row col-xl-4 col-12 py-2">
                                <div className="col-3 item-about-film">
                                    {item.name}
                                </div>
                                <div className="col-xl-4 col-6">
                                    <Dots/>
                                </div>
                                <div className="col-xl-2 col-3 px-5 item-about-film">
                                    {item.data}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}