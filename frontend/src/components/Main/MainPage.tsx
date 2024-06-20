import {observer} from "mobx-react-lite";
import {RandomFilm} from "./Random/RandomFilm.tsx";
import {TopFilms} from "./Top/TopFilms.tsx";

export const MainPage = observer(() => {

    return (
        <>
            <RandomFilm/>
            <TopFilms/>
        </>
    );
});