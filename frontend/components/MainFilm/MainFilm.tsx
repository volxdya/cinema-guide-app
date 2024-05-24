import styles from './MainFilm.module.css';
import {Star} from "@/icons/Star";
import Like from "@/icons/Like";
import Reroll from "@/icons/Reroll";
import Link from "next/link";

export function MainFilm(){
    return (
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
                    <Link href="/film">
                        <button className={styles.secondButton + ' ' + styles.button}>О фильме</button>
                    </Link>
                    <button className={styles.thirdButton}>
                    <Like/>
                    </button>
                    <button className={styles.thirdButton}><Reroll/></button>
                </div>
            </div>
        </div>
    );
}