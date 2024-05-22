import styles from './Genres.module.css';
import {GenreCard} from "@/components/GenreCard/GenreCard";

export default function genres() {
    return (
        <>
            <h1 className={styles.title + ' mt-20'}>Жанры фильмов</h1>
            <div className={styles.cards + ' mt-10'}>
                <GenreCard/>
                <GenreCard/>
                <GenreCard/>
                <GenreCard/>
                <GenreCard/>
                <GenreCard/>
                <GenreCard/>
                <GenreCard/>
            </div>
        </>
    );
}
  