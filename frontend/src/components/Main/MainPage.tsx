import {observer} from "mobx-react-lite";
import './MainPage.css';
import {RandomFilm} from "./Random/RandomFilm.tsx";

export const MainPage = observer(() => {

    return (
        <>
            <div className="wrapper">
                <div className="main-page">
                    <RandomFilm/>
                </div>
            </div>
        </>
    );
});