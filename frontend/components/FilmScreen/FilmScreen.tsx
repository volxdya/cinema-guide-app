import styles from './FilmScreen.module.css';
import {Star} from "@/icons/Star";
import Like from "@/icons/Like";
import {Dots} from "@/icons/Dots";

export function FilmScreen() {

    return (
        <>
            <div className={styles.wrapper}>
                <div>
                    <div className={styles.info}>
                        <span className={styles.rating + " flex justify-center gap-2"}>
                            <span className={styles.starContainer}><Star/></span>
                            <span>10</span>
                        </span>
                        <span className={styles.item}>1979</span>
                        <span className={styles.item}>детектив</span>
                        <span className={styles.item}>67 мин</span>
                    </div>
                    <div className={styles.containerTitle}>
                        <h1 className={styles.title}>Шерлок Холмс и доктор Ватсон: Знакомство</h1>
                        <p className={styles.description}>Увлекательные приключения самого известного сыщика всех
                            времен</p>
                    </div>

                    <div className={styles.buttons + ' mt-5'}>
                        <button className={styles.button + ' ' + styles.mainButton}>Трейлер</button>
                        <button className={styles.thirdButton}>
                            <Like/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h1 className={styles.title}>О фильме</h1>
                <div className="mt-20">
                    <ul>
                        <li className="flex py-3">
                            <span>Язык оригинала</span>
                            <span className="mt-4 px-4"><Dots/></span>
                            <span>Русский</span>
                        </li>
                        <li className="flex py-3">
                            <span>Бюджет</span>
                            <span className="mt-4 px-4"><Dots/></span>
                            <span>250 000 руб.</span>
                        </li>
                        <li className="flex py-3">
                            <span>Выручка</span>
                            <span className="mt-4 px-4"><Dots/></span>
                            <span>2 835 000 руб.</span>
                        </li>
                        <li className="flex py-3">
                            <span>Режиссёр</span>
                            <span className="mt-4 px-4"><Dots/></span>
                            <span>Игорь Масленников</span>
                        </li>
                        <li className="flex py-3">
                            <span>Продакшен</span>
                            <span className="mt-4 px-4"><Dots/></span>
                            <span>Ленфильм</span>
                        </li>
                        <li className="flex py-3">
                            <span>Награды</span>
                            <span className="mt-4 px-4"><Dots/></span>
                            <span>Топ-250, 33 место</span>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
}