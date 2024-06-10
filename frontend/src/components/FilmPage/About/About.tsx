import {Dots} from "../../../icons/Dots.tsx";
import {film} from "../../../interfaces/film.ts";

interface Props {
    film: film
}

export function About({film}: Props) {
    return (
        <div className="main-container mt-5">
            <h1>О фильме</h1>
            <div>
                <div className="py-3">


                    <div className="row col-4 py-2">
                        <div className="col-3">
                            Бюджет
                        </div>
                        <div className="col-4">
                            <Dots/>
                        </div>
                        <div className="col-2 px-5">
                            {film.budget}₽
                        </div>
                    </div>

                    <div className="row col-4 py-2">
                        <div className="col-3">
                            Выручка
                        </div>
                        <div className="col-4">
                            <Dots/>
                        </div>
                        <div className="col-2 px-5">
                            {film.revenue}₽
                        </div>
                    </div>

                    <div className="row col-4 py-2">
                        <div className="col-3">
                            Режиссёр
                        </div>
                        <div className="col-4">
                            <Dots/>
                        </div>
                        <div className="col-2 px-5">
                            заглушка
                        </div>
                    </div>

                    <div className="row col-4 py-2">
                        <div className="col-3">
                            Продакшен
                        </div>
                        <div className="col-4">
                            <Dots/>
                        </div>
                        <div className="col-2 px-5">
                            заглушка
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}