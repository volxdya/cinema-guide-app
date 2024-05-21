import Link from "next/link";
import styles from './mainpage.module.css';
import Like from "@/icons/Like";
import Reroll from "@/icons/Reroll";
import {Star} from "@/icons/Star";

export default function Home() {
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
                        <button className={styles.button}>Трейлер</button>
                        <button className={styles.secondButton + ' ' + styles.button}>О фильме</button>
                        <button className={styles.thirdButton}>
                            <Like/>
                        </button>
                        <button className={styles.thirdButton}><Reroll/></button>
                    </div>
                </div>
            </div>
            <h1 className={styles.titleTop + ' ' + "mt-20"}>Топ 10 фильмов</h1>
            <div className={styles.cards + ' ' + 'mt-20'}>
                <div className={styles.card}>
                    <div className={styles.counterTop}>1</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.counterTop}>2</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.counterTop}>3</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.counterTop}>4</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.counterTop}>5</div>
                </div>

            </div>

            <div className={styles.test}>
            </div>
        </>
    );
}
