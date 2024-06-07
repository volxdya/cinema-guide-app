import {observer} from "mobx-react-lite";
import './MainPage.css';

export const MainPage = observer(() => {

    return (
        <>
            <div className="wrapper">
                <div className="main-page">
                    <div className="main-container">
                        <div className="col-5 random-film">
                            <div>
                                <div className="statistics d-flex gap-4">
                                    <span className="rating-film">7.5</span>
                                    <span className="stats-text">1979</span>
                                    <span className="stats-text">детектив</span>
                                    <span className="stats-text">68 минут</span>
                                </div>
                                <div className="main-title-film mt-4">
                                    <h2>Шерлок Холмс и доктор Ватсон: Знакомство</h2>
                                    <p className="description-film mt-3">Увлекательные приключения самого известного сыщика всех времен</p>
                                </div>
                                <div className="buttons-film d-flex gap-3 mt-5">
                                    <button className="purple-btn">Трейлер</button>
                                    <button className="dark-btn">О фильме</button>
                                    <button className="dark-btn">Лайк</button>
                                    <button className="dark-btn">Reroll</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});