import styles from './mainpage.module.css';
import {FilmCard} from "@/components/FilmCard/FilmCard";
import {MainFilm} from "@/components/MainFilm/MainFilm";

export default function Home() {
    return (
        <>
            <MainFilm/>

            <h1 className={styles.titleTop + " mt-20"}>Топ 10 фильмов</h1>
            <div className={styles.cards +  ' mt-20'}>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
                <FilmCard/>
            </div>

            <div className={styles.test}>
            </div>
        </>
    );
}
