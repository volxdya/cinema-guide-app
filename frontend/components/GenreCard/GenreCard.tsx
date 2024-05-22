import styles from "@/app/genres/Genres.module.css";

export function GenreCard() {
    return (
        <div className={styles.card + ' mt-20'}>
            <div>
                <img src="https://i.pinimg.com/236x/ed/7a/c8/ed7ac8ff46227e184f86c9eb7281cb5a.jpg"
                     className={styles.image}
                     alt=""/>
                <p className={styles.titleFilm + ' ' + "text-center py-5"}>Драма</p>
            </div>
        </div>
    );
}